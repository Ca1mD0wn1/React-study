import React, { Component } from "react";

export default class App extends Component {
  state = {
    date: new Date()
  };
  render() {
    return (
      <div>
        当前时间为：{this.state.date.toLocaleDateString() +
          this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}
