import React, { Component } from 'react';

class Rounds extends Component {
  render() {
    const inputs = Array.from({ length: this.props.rounds.length }).map((ahihi, index) => (
        <tr className="round" key={index}>
            <th scope="row">{`Round ${index+1}`}</th>
            <td className="text-center" onChange = {e => this.props.onChangeScore(index,0,parseInt(e.target.value,10))}><input type="text"/></td>
            <td className="text-center" onChange = {e => this.props.onChangeScore(index,1,parseInt(e.target.value,10))}><input type="text"/></td>
            <td className="text-center" onChange = {e => this.props.onChangeScore(index,2,parseInt(e.target.value,10))}><input type="text"/></td>
            <td className="text-center" onChange = {e => this.props.onChangeScore(index,3,parseInt(e.target.value,10))}><input type="text"/></td> 
        </tr>
    ));
    return (
        <table className="table table-borderless table-sm" id="getId">
        <thead >
            <tr>
                <th scope="col"></th>
                <th scope="col" className="text-center">{this.props.players[0]}</th>
                <th scope="col" className="text-center">{this.props.players[1]}</th>
                <th scope="col" className="text-center">{this.props.players[2]}</th>
                <th scope="col" className="text-center">{this.props.players[3]}</th>
            </tr>
        </thead>
        <tbody className="add">
            <tr className="sum-score">
                <th scope="row">{`Sum of Score(${this.props.sumOfScore})`}</th>
                <td className="text-center">{this.props.totals[0]}</td>
                <td className="text-center">{this.props.totals[1]}</td>
                <td className="text-center">{this.props.totals[2]}</td>
                <td className="text-center">{this.props.totals[3]}</td>
            </tr>
            {inputs}
        </tbody>
        
        </table>
    );
  }
}

export default Rounds;