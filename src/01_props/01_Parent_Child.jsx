import React from "react";
class Child extends React.Component {
  render() {
    return (
      <div><h3>我是子组件</h3></div>
    )
  }

}
class Parent extends React.Component {
  render() {
    return (
      <div><h2>我是父组件</h2>
      <Child/></div>
    )
  }
}
class App extends React.Component {
  render() {
    return (
      <div>父子组件
              <Parent/>
      </div>

    )
  }
}

export default App