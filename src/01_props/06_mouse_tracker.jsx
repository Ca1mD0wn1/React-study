import React, { Component } from "react";

export default class App extends Component {
  state = {
    x: 0,
    y: 0
  };
  render() {
    return (
      <div
        style={{ width: "100vw", height: "100vh" }}
        onMouseMove={event => {
          this.setState({ x: event.clientX, y: event.clientY });
        }}
      >
        <p>
          鼠标位置：({this.state.x}, {this.state.y})
        </p>
      </div>
    );
  }
}
