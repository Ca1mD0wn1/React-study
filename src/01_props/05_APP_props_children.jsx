import React, { Component } from "react";
const Content = props => {
  console.log("Content", props.children);
  return (
    <div>
      {props.children}
    </div>
  );
};

class Header extends Component {
  render() {
    console.log("header", this.props.children);
    return (
      <header>
        {this.props.children}
      </header>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div>
        <Header>这里是首页头部</Header>
        <Content>这里是首页内容</Content>
        <hr />
        <Header>这里是分类头部</Header>
        <Content>这里是分类内容</Content>
      </div>
    );
  }
}

export default App;
