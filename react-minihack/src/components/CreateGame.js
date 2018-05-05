import React, { Component } from 'react';
import Header from './Header';
import ButtonCreate from './ButtonCreate';

class CreateGame extends Component {
  state ={
    players :['','','','']
  };
    render() {
      const inputs = this.state.players.map((ahihi, index) => (
        <div className="input-group input-group-sm mb-3" key={index}>
            <input
                name={`player${index+1}`}
                type="text"
                className="form-control"
                placeholder={`Player ${index+1}...`}
                onChange={e => this.props.handleChangeText(index, e.target.value)}
            />
        </div>
    ));
    return (
      <div className="container">
        <Header />
        <div className="input">
          <div>{inputs}</div>
        </div>
          <ButtonCreate onCreateNewGame={this.props.onCreateNewGame}/>
      </div>

    );
    
   
    }
  }
  
  export default CreateGame;