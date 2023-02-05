import React, { Component } from "react";

class Example extends Component {
  state = {
    count: 0,
  };

  formattedCount = () => {
    let { count } = this.state;
    return count === 0 ? "Zero" : count;
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <hr />
        <h2>Experimental Section</h2>
        <span className="badge bg-secondary m-2">{this.formattedCount()}</span>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
      </React.Fragment>
    );
  }
}

export default Example;
