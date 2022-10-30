import React, { Component } from "react";

export default class App extends Component {
  state = {
    username: "",
    arr: [1, 2, 3, 4]
  };
  handlerChange = event => {
    this.setState({ username: event.target.value });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handlerChange}
        />
        {this.state.username}
        {this.state.arr}
      </div>
    );
  }
}
