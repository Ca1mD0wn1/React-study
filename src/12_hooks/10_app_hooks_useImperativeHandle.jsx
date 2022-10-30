import React from "react";

const Child = React.forwardRef((props,ref) => {

  const inputRef = React.useRef()
  React.useImperativeHandle(ref,()=>{
    return {
      inputFocus:()=>{
        inputRef.current.focus();
      },
      username:"我是你爹"
    }
  })
  return (<>
  <input type="text" ref={inputRef}/>
  </>)
});
const App = () => {
  const childRef = React.createRef()
  return <div>
    <button onClick={()=>{
      childRef.current.inputFocus();
      console.log(childRef.current.username);
    }}>获取焦点</button>
    <Child ref = {childRef}></Child>
    
    </div>;
};

export default App;
