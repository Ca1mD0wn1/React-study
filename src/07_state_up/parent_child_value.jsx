import React, { Component } from "react";

class Child1 extends React.Component {
  state = {
    count: 1
  };
  render() {
    return (
      <>
      <span>
        {this.state.count}
      </span>
      <button onClick={()=>{
        this.setState({count: this.state.count + 1});
      }}>加一</button>
      </>
    );
  }
}

class Child2 extends React.Component {
  state = {
    count: 1
  };
  render() {
    return (
      <>
      <span>
        {this.state.count}
      </span>
      <button onClick={()=>{
        this.setState({count: this.state.count + 1});
      }}>加一</button>
      </>
    );
  }
}
export default class App extends Component {
  render() {
    return <div>
      <Child1></Child1>
      <Child2></Child2>
    </div>;
  }
}
