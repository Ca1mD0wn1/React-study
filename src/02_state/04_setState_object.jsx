import React, { Component } from "react";

export default class App extends Component {
  state = {
    count: 100
  };
  render() {
    return (
      <div>
        {this.state.count}
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        />
      </div>
    );
  }
}
