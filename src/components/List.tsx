import React, { Component } from "react";

class List extends Component {
  state = {
    items: ["Item 1", "Item 2", "Item 3"],
  };

  render() {
    return (
      <ul style={{ textAlign: "left" }}>
        {this.state.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
}

export default List;
