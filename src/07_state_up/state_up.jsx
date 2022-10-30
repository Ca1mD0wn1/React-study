import React, { Component } from "react";

class Child1 extends React.Component {
  render() {
    return (
      <>
      <span>
        {this.props.count}
      </span>
      <button onClick={this.props.MyOnClick}>加一</button>
      </>
    );
  }
}

class Child2 extends React.Component {
  render() {
    return (
      <>
      <span>
        {this.props.count}
      </span>
      <button onClick={this.props.MyOnClick}>加一</button>
      </>
    );
  }
}
export default class App extends Component {
  state = {count:1};

  add = () => {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return <div>
      <Child1 count = {this.state.count} MyOnClick = {this.add}></Child1>
      <Child2 count = {this.state.count} MyOnClick = {this.add}></Child2>
    </div>;
  }
}
