import React from "react";
import PropTypes from "prop-types";

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

Child2.defaultProps = {
  str: "我是你爹爹呢"
};
Child2.propTypes = {
  str: PropTypes.string.isRequired,
  flag: PropTypes.bool,
  num: function(props, propName, componentName) {
    console.log(props);
    console.log(propName);
    console.log(componentName);
  }
};

Child2.propTypes = {
  str: PropTypes.string.isRequired, // 该属性必须传递，但是只要设置了默认值，即可不传（vue即使设置默认值，但是还需要传递值）
  flag: PropTypes.bool,
  // num: PropTypes.string,
  // num: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // 多个类型
  obj: PropTypes.object,
  arr: PropTypes.array,
  num: function(props, propName, componentName) {
    console.log(props);
    console.log(propName);
    console.log(componentName);
    if (typeof props[propName] !== "number") {
      return new Error("请传入number类型数据");
    }
    if (props[propName] < 1000) {
      return new Error("出错了");
    }
  }
};
class Child1 extends React.Component {
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
          str={str}
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
