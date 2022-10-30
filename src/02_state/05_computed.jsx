import React, { Component } from "react";
import memoize from "memoize-one";

class MemoList extends Component {
  state = {
    text: ""
  };
  filter = memoize((list, text) => {
    return list.filter(item => text !== "" && item.includes(text));
  });
  render() {
    const list = this.filter(this.props.list, this.state.text);
    return (
      <>
      <input type="text" value = {this.state.text} onChange = {(event)=>{
        this.setState({text: event.target.value});
      }}/>
      <ul>
        {list.map((item,index) =>{
          return (
            <li key={index}>{item}</li>
          )
        })}
      </ul>
      </>
    )
  }
}

export default class App extends Component {
  state = {
    list: ['a', 'ab', 'abc', 'abcd']
  }
  render() {
return(
  <div>
    <MemoList list = {this.state.list}/>
  </div>
)
  }
}
