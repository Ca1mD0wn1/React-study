import React, { Component } from "react";
class Footer extends Component {
  render () {
    return (
      <footer>
        Copyright © 2022 Meta Platforms, Inc.
      </footer>
    )
  }
}
const withFooter = Com => {
  return class extends Component{

    state = {
      username :"你龙哥"
    }
    render() {
      return (
        <>
        <Com username = {this.state.username}></Com>
        <Footer/>
        </>
      )
    }
  }
};


class Page1 extends Component { 
  render () {
    return (
      <div>
        <h1>page1 - { this.props.username }</h1>
      </div>
    )
  }
}
Page1 = withFooter(Page1);


class Page2 extends Component { 
  render () {
    return (
      <div>
        <h1>Page2 - { this.props.username }</h1>
      </div>
    )
  }
}
Page2 = withFooter(Page2);
class Page3 extends Component { 
  render () {
    return (
      <div>
        <h1>Page3 - { this.props.username }</h1>
      </div>
    )
  }
}
Page3 = withFooter(Page3);
export default class App extends Component {
  render() {
    return (
      <div>
        <Page1 />
        <hr />
        <Page2 />
        <hr />
        <Page3 />
      </div>
    );
  }
}
