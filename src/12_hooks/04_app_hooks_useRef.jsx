import React from "react";

class Com extends React.Component {
  render() {
    return;
  }
}

const FunCom = React.forwardRef((props, ref) => {
  return <div ref={ref}>函数式组件</div>;
});
const App = () => {
  const btnRef = React.useRef();
  const comRef = React.useRef();
  const FunComRef = React.useRef();
  React.useEffect(() => {
    console.log(btnRef);
    console.log(comRef);
    console.log(FunComRef);
  }, []);
  return (
    <div>
      <button ref={btnRef}>按钮 ref</button>
      <Com ref={comRef} />
      <FunCom ref={FunComRef} />
    </div>
  );
};

export default App;
