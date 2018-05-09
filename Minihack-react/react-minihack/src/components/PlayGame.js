import React, { Component } from 'react';
import Header from './Header';
import Rounds from './Rounds';
import AddRound from './AddRound';
import axios from '../axios';

let setRounds = function(data){
    let rounds =[];
    let length = data.Player[0].round.length;
    for(let i = 0 ; i < length;i ++){
        let mround = [0,0,0,0];
        for(let j = 0; j < 4 ; j++){    
            mround[j] = Number(data.Player[j].round[i].score);
        }
        rounds.push(mround);
    }
    console.log(rounds);
    return rounds;
}
class PlayGame extends Component {
    state = {
        id : 0,
        rounds: [],
        totals:[0,0,0,0],
        sumOfScore: 0,
        playerName: ['','','','']
    }
    
    componentDidMount(){
        axios.get(`http://localhost:6969/api/game/${this.props.match.params.id}`)
            .then(data => {
                let info = data.data.info;
                let round = setRounds(data.data.info);
                
                if (info) {
                    this.setState({
                        id : this.props.match.params.id,
                        rounds : round,
                        playerName: [info.Player[0].name, info.Player[1].name, info.Player[2].name,info.Player[3].name]
                    })
                }
                
        })
    }
    _onAddRound = ()=>{
        let rounds = this.state.rounds;
        rounds.push([0,0,0,0]);
        this.setState({rounds});
        axios.post( '/api/game/addRound', {
            id: this.state.id
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    _onChangeScore = async (index,NoPlayer,value)=>{
        if(isNaN(value)){
            return;
        }
        else{
            var round = this.state.rounds;
            round[index][NoPlayer] = value;
            console.log(index + ' ' +NoPlayer + ' ' + value );
            let totals = this.state.totals;
            let sum=0,sumOfScore=0;
            for(let i=0;i<round.length;i++){
                sum = sum + parseInt( round[i][NoPlayer],10);
            }
            totals[NoPlayer] = sum;
            for(let i=0;i<4;i++){
                sumOfScore+= parseInt(totals[i],10);
            }
            this.setState({rounds : round});
            this.setState({totals});
            this.setState({sumOfScore});
            axios.post('/api/game', {
                id: this.state.id,
                name: NoPlayer,
                Round : index,
                Score : value
              })
        }
}
render() {
    return (
        <div className="container">
            <Header/>
            <Rounds players = {this.state.playerName} sumOfScore = {this.state.sumOfScore} rounds = {this.state.rounds} totals = {this.state.totals} onChangeScore = {this._onChangeScore} />
            <AddRound onAddRound = {this._onAddRound}/>
        </div>
    );
  }
}
export default PlayGame;