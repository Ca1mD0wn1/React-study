import React, { useEffect, useLayoutEffect } from "react";

export const App = () => {
  const [count, setCount] = React.useState(1);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        加一
      </button>
      {count}
    </div>
  );
};
export default App;
