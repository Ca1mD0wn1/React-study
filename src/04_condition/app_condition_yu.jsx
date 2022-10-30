import React, { Component } from "react";

class MainBox extends React.Component {
  render() {
    return (
      <div>
        {this.props.unReadMessage.length > 0 &&
          <span>
            还有{this.props.unReadMessage.length}条未读消息
          </span>}
      </div>
    );
  }
}
export default class App extends Component {
  state = {
    message: ["a", "b", "c", "d"]
  };
  render() {
    return (
      <div>
        {this.state.message.map((item, index) => {
          return (
            <p key={index}>
              {item}
              <button
                onClick={() => {
                  const arr = this.state.message;
                  arr.splice(index, 1);
                  this.setState({ message: arr });
                }}
              >
                已读
              </button>
            </p>
          );
        })}
        <MainBox unReadMessage={this.state.message} />
      </div>
    );
  }
}
