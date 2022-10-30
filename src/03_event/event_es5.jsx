import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handlerClickFn = this.handlerClick.bind(this);
  }
  handlerClick(e) {
    console.log(1, e, this);
  }
  handlerParamsClick(a, b, event) {
    // 自定义参数  event将作为最后一个参数
    console.log("a", a); // a  1
    console.log("b", b); // b  2
  }
  render() {
    return (
      <div>
        <button onClick={this.handlerClickFn}>es5绑定事件-构造函数</button>
        <button onClick={this.handlerClick.bind(this)}>es5-jsx改变this指向</button>
        <button onClick={this.handlerParamsClick.bind(this, "1", "2")}>
          传递参数
        </button>
      </div>
    );
  }
}
