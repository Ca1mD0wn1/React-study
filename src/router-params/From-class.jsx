import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { withRouter } from "./withRouter";
class FromClass extends Component {
  render() {
    const path = {
      pathname: "to",
      state: {
        name: "叶星辰",
        age: 18
      }
    };
    return (
      <div>
        <h1>类组件传参</h1>
        <Link to={path}>传参</Link>
      </div>
    );
  }
}

export default withRouter(FromClass);
