import React from "react";
import store from "./store";
const Child1 = () => {
  const state = store.getState();
  return (
    <div>
      <h1>child1</h1>
      <p>
        {state.count}--{state.msg}
      </p>
      <button
        onClick={() => {
          store.dispatch({
            type: "INCREMENT_COUNT",
            payload: 10
          });
        }}
      >
        加10
      </button>
      <button
        onClick={() => {
          store.dispatch({
            type: "DE_INCREMENT_COUNT",
            payload: 10
          });
        }}
      >
        减10
      </button>
    </div>
  );
};

export default Child1;
