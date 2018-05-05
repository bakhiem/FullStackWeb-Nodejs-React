import React, { Component } from "react";

class ButtonCreate extends Component {
  render() {
    return (
      <div className="text-center">
        <button
          type="submit"
          className="btn btn-danger"
          onClick={this.props.onCreateNewGame}
        >
          CREATE NEW GAME
        </button>
      </div>
    );
  }
}

export default ButtonCreate;