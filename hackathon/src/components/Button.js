import React, { Component } from 'react';

class Buttons extends Component {

  render() {
    return (
        <div className='row'>
            <button className='btn btn-light col-4' onClick={this.props.__Pomodoro}>Pomodoro</button>
            <button className='btn btn-success col-4' onClick={this.props.__ShortBreak}>Short Break</button>
            <button className='btn btn-warning col-4' onClick={this.props.__LongBreak}>Long Break</button>
        </div>
    );
  }
}

export default Buttons;