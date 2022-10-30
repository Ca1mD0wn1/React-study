import React, { Component } from "react";

class Com extends Component {
  state = {
    name: "类组件"
  };
  testFn = () => {
    console.log(this.state.name + "!!!!!!!");
  };
  render() {
    return <div>类组件ref的使用</div>;
  }
}

const FunCom = React.forwardRef((props, ref) => {
  return <div ref={ref}>函数式组件ref</div>;
});

const Form = React.forwardRef((props, ref) => {
  return (
    <form ref={ref}>
      <input type="text" name="username" />
      <input type="text" name="password" />
      <input type="submit" value="提交" />
      {/* <input type="button" value="取消" /> */}
    </form>
  );
});
class App extends Component {
  btn3Ref = React.createRef(); // 创建一个唯一的 ref
  comRef = React.createRef();
  funRef = React.createRef();
  formRef = React.createRef();
  render() {
    return (
      <div>
        <button id="btn1">按钮1-id</button>
        <button ref="btn2">按钮2-refs - 废弃</button>
        <button ref={this.btn3Ref}>按钮2 - createRef </button>
        <Com ref={this.comRef} />
        <Form ref={this.formRef} />
        <FunCom ref={this.funRef} />

        <input
          type="button"
          value="重置表单"
          onClick={() => {
            this.formRef.current.username.value = "";
            this.formRef.current.password.value = "";
          }}
        />
      </div>
    );
  }
}

export default App;
