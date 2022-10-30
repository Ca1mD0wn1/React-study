import React, { Component } from "react";
const myContext = React.createContext();
class Child extends React.Component {
  render() {
    return <>
    <myContext.Consumer>
      {
        val=>{
          return (<>
          <div>{val.theme}</div> <div>{val.lang}</div></>)
        }
      }
    </myContext.Consumer></>;
  }
}
export default class App extends Component {
  state = {
    theme: "default",
    lang: "ch"
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ theme: "default" });
          }}
        >
          白天
        </button>
        <button
          onClick={() => {
            this.setState({ theme: "night" });
          }}
        >
          夜间
        </button>
        <button
          onClick={() => {
            this.setState({ lang: "zh" });
          }}
        >
          中文
        </button>
        <button
          onClick={() => {
            this.setState({ lang: "cn" });
          }}
        >
          英文
        </button>
        <myContext.Provider value={this.state}>
          <Child />
        </myContext.Provider>
      </div>
    );
  }
}
