import React, { Component } from 'react';

class ListDo extends Component {
    state = {
        job : [],
        inputfield : ''
    }
    updateInputValue = (evt) =>{
        this.setState({inputfield: evt.target.value});   
      }
    addJob = () =>{
        let job = this.state.job;
        job.push(this.state.inputfield);
        this.setState({job});
    }
  render() {
      const jobs = this.state.job.map((job,index) => (<div key={index}>
      <div className="input-group mb-3">
        <input type="text" className="form-control" defaultValue={job}></input>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">Done</button>
          <button className="btn btn-outline-primary" type="button">Delete</button>
        </div>
      </div>
      </div>));
    return (
    <div>
    <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Something to do"  onChange={this.updateInputValue}></input>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" onClick={this.addJob}>Add</button>
        </div>
      </div>
      <div className='job-field'>
      {jobs}
      </div>
      </div>
    );
  }
}

export default ListDo;