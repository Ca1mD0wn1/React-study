import React, { useDeferredValue, useEffect, useMemo, useState } from "react";
const List = ({ list }) => {
  return (<>
  <ul>
    {
      list.map(item=>{
        return(
        <li key={item.proid}>{item.proname}</li>
        )
      })
    }
  </ul>
  </>);
};
const App = () => {
  const [keyword, setKeyword] = useState("");
  const [list, setList] = useState([]);
  const deferredKeyword = useDeferredValue(keyword)
  useEffect(
    () => {
      fetch("http://121.89.205.189:3001/api/pro/search?keyword=" + keyword)
        .then(res => res.json())
        .then(res => {
          console.log(123);
          setList(res.data?res.data:[]);
        });
    },
    [deferredKeyword]
  );
  return (
    <div>
      <List list={list}/>
      <input type="text" onChange={(event)=>{
        console.log(event.target.value);
        setKeyword(event.target.value);
      }}/>
    </div>
  );
};

export default App;
