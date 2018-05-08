import React, { Component } from 'react';
import Header from './Header';
import Rounds from './Rounds';
import AddRound from './AddRound';
import axios from '../axios';


class PlayGame extends Component {
    state = {
        rounds: [[0,0,0,0]],
        totals:[0,0,0,0],
        sumOfScore: 0
    }
    _onAddRound = ()=>{
        let rounds = this.state.rounds;
        rounds.push([0,0,0,0]);
        this.setState({rounds});
        console.log()
        
        axios.post( '/api/game/addRound', {
            id: '5af156d1dd4d280744fc2130'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    _onChangeScore = (index,NoPlayer,value)=>{
        if(isNaN(value)){
            return;
        }
        else{
            let rounds = this.state.rounds;
            rounds[index][NoPlayer] = value;
            let totals = this.state.totals;
            let sum=0,sumOfScore=0;
            for(let i=0;i<rounds.length;i++){
                sum = sum + parseInt( rounds[i][NoPlayer],10);
            }
            totals[NoPlayer] = sum;
            for(let i=0;i<4;i++){
                sumOfScore+= parseInt(totals[i],10);
            }
            this.setState({rounds});
            this.setState({totals});
            this.setState({sumOfScore})

            axios.post('/api/game/updateGame', {
                id: '5af156d1dd4d280744fc2130',
                player: NoPlayer,
                round : index,
                score : value
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
}
render() {
    return (
        <div className="container">
            <Header/>
            <Rounds players = {this.props.players} sumOfScore = {this.state.sumOfScore} rounds = {this.state.rounds} totals = {this.state.totals} onChangeScore = {this._onChangeScore} />
            <AddRound onAddRound = {this._onAddRound}/>
        </div>
    );
  }
}
export default PlayGame;