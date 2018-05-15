import React, { Component } from 'react';

class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {
            min :this.props.min,
            sec :this.props.sec,
            typeTime : this.props.type,
            isStart : 0
        }
        var x;
        var isRun = 0;
      }
      componentWillReceiveProps(nextProps) {
        this.setState({ min: nextProps.min,sec: nextProps.sec,typeTime : nextProps.type });  
      }
    setTime = () =>{
        this.isRun = 1;
        let sec = this.state.sec;
        let min = this.state.min;
        console.log(sec +':'+ min);
        if(sec === 0){
            sec = 59;
            if(min === 0){
                console.log('het gio');
            }
            else{
                min --;
            }
        }
        else{
            sec --;
        }
        this.setState({sec,min});
      }
      
      Start = () =>{
        if(this.isRun === undefined || this.isRun === 0){
        let setTime = this.setTime;
        this.setState({isStart : 1});
            this.x = setInterval(function(){
                setTime();
            }, 1000);
        }
    }
      Stop = () =>{
        this.isRun = 0;
        this.setState({isStart : 0});
        clearInterval(this.x);
      }
      Reset = () =>{
        this.isRun = 0;
        this.setState({
            min : this.state.typeTime,
            isStart : 0,
            sec : 0
        })
        clearInterval(this.x);
    }
  render() {
    return (
      <div className="timer text-center"><h1>{this.state.min} : {this.state.sec}</h1> 
      <button className="btn btn-danger col-2"  onClick={this.Start}>Start</button>
      <button className="btn btn-secondary col-2" onClick={this.Stop}>Stop</button>
      <button className="btn btn-success col-2" onClick={this.Reset}>Reset</button>
      </div>
    );
  }
}
export default Count;