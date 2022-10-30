import React, { Component } from "react";

export default class App extends Component {
  handlerClickFn = event => {
    console.log(1, this);
    console.log(event);
  };

  handlerParamsClick = (a, b, event) => {
    console.log("a", a); // a 1
    console.log("b", b); // b 2
  };
  render() {
    return (
      <div>
        <button onClick={this.handlerClickFn}>es6绑定事件-定义箭头函数</button>
        <button
          onClick={event => {
            // event 默认参数
            console.log(2, this);
          }}
        >
          es6绑定事件-jsx写箭头函数
        </button>
        <button onClick={this.handlerParamsClick.bind(this, "1", "2")}>
          es6绑定事件-传递参数
        </button>
        <button
          onClick={event => {
            // event 默认参数
            console.log(2, this);
            // this.fetchData({ count: this.state.count })
          }}
        >
          es6绑定事件-jsx写箭头函数,直接使用参数
        </button>
      </div>
    );
  }
}
