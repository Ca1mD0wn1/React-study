import React from "react";
import store from "./store";
const Child2 = () => {
  const state = store.getState();
  return (
    <div>
      <h1>child2</h1>
      <p>
        {state.count}--{state.msg}
      </p>
      <button
        onClick={() => {
          store.dispatch({
            type: "CHANGE_MSG",
            payload: "这是更改后的message"
          });
        }}
      >
        更改message
      </button>
    </div>
  );
};

export default Child2;
