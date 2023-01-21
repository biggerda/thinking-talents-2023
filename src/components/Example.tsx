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
        <span>{this.formattedCount()}</span>
        <button onClick={this.handleIncrement}>Increment</button>
      </React.Fragment>
    );
  }
}

export default Example;
