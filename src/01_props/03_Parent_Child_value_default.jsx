import React from "react";

const Child2 = props => {
  return (
    <div>
      <h3>子组件2</h3>
      <div>
        str的值为{props.str}
      </div>
      <div>
        flag的值为{props.flag + ""}
      </div>
      <div>
        num的值为{props.num}
      </div>
      <div>
        obj的a值为{props.obj.a}
      </div>
      <div>
        arr的值为{props.arr}
      </div>
    </div>
  );
};
class Child1 extends React.Component {
  static defaultProps = {
    str: "我是你爹呢"
  };
  render() {
    return (
      <div>
        <h3>子组件1</h3>
        <div>
          str的值为{this.props.str}
        </div>
        <div>
          flag的值为{this.props.flag + ""}
        </div>
        <div>
          num的值为{this.props.num}
        </div>
        <div>
          obj的a值为{this.props.obj.a}
        </div>
        <div>
          arr的值为{this.props.arr}
        </div>
      </div>
    );
  }
}

class Parent extends React.Component {
  render() {
    const str = "我是你爹";

    return (
      <div>
        <h3>父组件</h3>
        <Child1
          flag={true}
          num={100}
          obj={{ a: 1, b: 2 }}
          arr={["a", "b", "c"]}
        />
        <Child2
          str={str}
          flag={false}
          num={10000}
          obj={{ a: 10, b: 20 }}
          arr={["aa", "bb", "cc"]}
        />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>父子组件</h1>
        <Parent />
      </div>
    );
  }
}

export default App;
