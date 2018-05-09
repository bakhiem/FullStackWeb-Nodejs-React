import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateGame from "./components/CreateGame";
import PlayGame from "./components/PlayGame";
import axios from './axios';
import { BrowserRouter,Route} from 'react-router-dom';
class App extends Component {
  state = {
    players: ['', '' ,'' ,''],
    id : 0
  };

_handleChangeText = (index, name) => {
    let players = this.state.players
    players[index] = name
    this.setState({players: players})
}
  _onCreateNewGame = () =>{
    axios.post('/api/game/create',{
      players : this.state.players
    })
    .then(function(response){
      this.setState({id:response.data});
    })
    .catch(function (error){
      console.log(error);
    })

  }
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Route exact path="/"  render={() => <CreateGame onCreateNewGame={this._onCreateNewGame} handleChangeText ={this._handleChangeText}/>} />
      <Route path="/game/:id" component={PlayGame} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
