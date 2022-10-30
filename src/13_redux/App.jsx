import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
const App = () => {
  return (
    <div>
      <h1>使用redux</h1>
      <Child1 />
      <hr />
      <Child2 />
    </div>
  );
};

export default App;
