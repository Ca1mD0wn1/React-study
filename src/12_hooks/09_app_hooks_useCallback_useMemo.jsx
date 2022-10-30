import React from "react";
import { useState } from "react";

const Child = () => {
  console.log("child");
  return <div>child</div>;
};
const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(100);
  const add = () => {
    setA(a + 1);
  };
  return (
    <div>
      <button onClick={add} />
    </div>
  );
};

export default App;
