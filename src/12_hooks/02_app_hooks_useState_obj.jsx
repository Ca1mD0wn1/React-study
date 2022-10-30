import React from "react";
import { useState } from "react";
const App = () => {
  const [obj, setObj] = useState({
    w: 100,
    h: 100,
    x: 0,
    y: 0
  });
  return (
    <div
      style={{ width: "100VW", height: "100VH" }}
      onMouseMove={event => {
        setObj({ ...obj, x: event.clientX, y: event.clientY });
      }}
    >
      元素的高为{obj.h}
      元素的宽为{obj.w}
      元素的坐标点为{obj.x}, {obj.y}
    </div>
  );
};

export default App;
