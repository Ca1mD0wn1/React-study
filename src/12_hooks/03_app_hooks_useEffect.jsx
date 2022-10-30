import React, { useEffect, useState } from "react";
const App = () => {
  const [proList, setProList] = useState([]);

  useEffect(() => {
    fetch("http://121.89.205.189:3001/api/pro/list").then(res => {
      res.json().then(res => {
        console.log(res.data);
        setProList(res.data);
      });
    });
  }, []);

  return (
    <div>
      <ul>
        {proList.map(item => {
          return (
            <li key={item.proid}>
              {item.proname}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
