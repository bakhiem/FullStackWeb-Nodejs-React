import React, { Component } from 'react';
import Count from './ReverseCount'
import Buttons from './Button';
import ListDo from './ListToDo';
class Content extends Component {
  
  state = {
    min : 25,
    sec : 0,
    type : 25
  }
  __Pomodoro = () =>{
    this.setState({
      min : 25,
      sec : 0,
      type : 25
    })
    this.child.Reset();
  }
  __ShortBreak = () =>{
    console.log('ahihi');
    this.setState({
      min : 5,
      sec : 0,
      type : 5
    })
    this.child.Reset();
    console.log(this.state.min);
  }
  __LongBreak = () =>{
    this.setState({
      min : 10,
      sec : 0,
      type : 10
    })
    this.child.Reset();
    console.log(this.state.min);
  }
  render() {
    return (
      <div className='container'>
        <Buttons __Pomodoro={this.__Pomodoro}
            __ShortBreak = {this.__ShortBreak}
            __LongBreak = {this.__LongBreak}
        />
        <Count ref={instance => { this.child = instance; }}
        min={this.state.min} sec={this.state.sec} type={this.state.type}/>
        <ListDo/>
      </div>
    );
  }
}

export default Content;