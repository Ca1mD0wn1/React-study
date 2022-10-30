import React, { Component } from "react";

const Cat = props => {
  return (
    <div>
      cat鼠标位置:({props.point.x}, {props.point.y})
    </div>
  );
};
const Dog = props => {
  return (
    <div>
      Dog鼠标位置:({props.point.x}, {props.point.y})
    </div>
  );
};

class Mouse extends Component {
  state = {
    x: 0,
    y: 0
  };
  render() {
    return (
      <div
        style={{ width: "100vw", height: "50vh" }}
        onMouseMove={event => {
          // 修改状态 --  不要使用赋值表达式
          this.setState({
            x: event.clientX,
            y: event.clientY
          });
        }}
      >
        <p>
          mouse鼠标位置：({this.state.x}, {this.state.y})
        </p>
        {this.props.render(this.state)} 
      </div>
    );
  }
}
export default class App extends Component {
  render() {
    return (
      <div>
        <Mouse render={point => {
          return(
            <>
            <Cat point={point}></Cat><Dog point={point}>
              </Dog></>
          )
        }} />
      </div>
    );
  }
}
