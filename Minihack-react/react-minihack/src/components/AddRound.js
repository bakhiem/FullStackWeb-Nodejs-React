import React, { Component } from 'react';

class AddRound extends Component {
  render() {
    return (
        <div className="text-center">
            <button onClick = {this.props.onAddRound} type="submit" className="btn btn-danger">ADD ROUND</button>
        </div>
    );
  }
}

export default AddRound;