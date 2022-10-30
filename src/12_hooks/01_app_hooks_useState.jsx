import React from "react";
import { useState } from "react";
const App = () => {
  const [count, setCount] = useState(1);
  const [user, setName] = useState({ name: "龙哥", sex: "男" });
  return (
    <div>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        加1
      </button>
      {user.name}--{user.sex}
      <button
        onClick={() => {
          setName({ ...user, name: user.name + "爹" });
        }}
      >
        爹
      </button>
    </div>
  );
};

export default App;
