import React, { Component } from 'react';
import Header from './Header';
import Rounds from './Rounds';
import AddRound from './AddRound';

class PlayGame extends Component {
    state = {
        rounds: [[0,0,0,0]],
        totals:[0,0,0,0],
        sumOfScore: 0
    }
    _onAddRound = ()=>{
        let rounds = this.state.rounds;
        rounds.push([0,0,0,0]);
        this.setState({rounds})
    }
    _onChangeScore = (index,player,value)=>{
        if(isNaN(value)){
            return;
        }
        else{
            let rounds = this.state.rounds;
            rounds[index][player] = value;
            let totals = this.state.totals;
            let sum=0,sumOfScore=0;
            for(let i=0;i<rounds.length;i++){
                sum = sum + parseInt( rounds[i][player],10);
            }
            totals[player] = sum;
            for(let i=0;i<4;i++){
                sumOfScore+= parseInt(totals[i],10);
            }
            this.setState({rounds});
            this.setState({totals});
            this.setState({sumOfScore})
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