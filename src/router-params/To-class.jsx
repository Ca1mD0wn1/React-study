import React, { Component } from "react";
import { withRouter } from "./withRouter";
import qs from "query-string";
class ToClass extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {/* params传递的参数为{this.props.params.number} */}
        <br />
        {/* search传递的参数为{qs.parse(this.props.location.search).number} */}
        <br />
        state传递的参数为{this.props.location.state}
      </div>
    );
  }
}

export default withRouter(ToClass);
