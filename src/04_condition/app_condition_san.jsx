import React, { Component } from "react";

export default class App extends Component {
  state = {
    loginState: false
  };
  render() {
    return (
      <div>
        {this.state.loginState + " "}
        <button
          onClick={() => {
            this.setState({ loginState: !this.state.loginState });
          }}
        >
          切换
        </button>
        {this.state.loginState ? <button>退出</button> : <button>登录</button>}
      </div>
    );
  }
}
