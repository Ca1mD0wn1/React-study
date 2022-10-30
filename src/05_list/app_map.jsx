import React, { Component } from "react";

export default class App extends Component {
  state = {
    proList: []
  };
  componentDidMount() {
    fetch("http://121.89.205.189:3001/api/pro/list")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ proList: res.data });
      });
  }
  render() {
    const { proList } = this.state;
    return (
      <div>
        {proList.map((item, index) => {
          return (
            <p key={item.proid}>
              {index + 1} - {item.proname}
            </p>
          );
        })}
      </div>
    );
  }
}
