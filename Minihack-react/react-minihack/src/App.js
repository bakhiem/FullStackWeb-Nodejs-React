import React, { Component } from 'react';

import './App.css';

import CreateGame from "./components/CreateGame";
import PlayGame from "./components/PlayGame";
//import axios from 'axios';

class App extends Component {
  state = {
    isCreated: false,
    players: ['', '' ,'' ,'']
  };

_handleChangeText = (index, name) => {
    let players = this.state.players
    players[index] = name
    this.setState({players: players})
}
  _onCreateNewGame = () => this.setState({ isCreated: true });
  render() {
    return (
      <div className="App">
        {this.state.isCreated ? <PlayGame players = {this.state.players}/> : <CreateGame onCreateNewGame={this._onCreateNewGame} handleChangeText ={this._handleChangeText}/>}
      </div>
    );
  }
}

export default App;
