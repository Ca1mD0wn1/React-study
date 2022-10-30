import React from "react";

import { useContext } from "react";
import { useEffect } from "react";
import { useReducer } from "react";

const MyContext = React.createContext();

const initialState = {
  userName: "曹喜龙",
  count: 100,
  proList: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_USER_NAME":
      return { ...state, userName: action.payload };
    case "CHANGE_COUNT":
      return { ...state, count: action.payload };
    case "CHANGE_PRO_LIST":
      return { ...state, proList: action.payload };
    default:
      return state;
  }
};

const Home = () => {
  const { state, dispatch } = useContext(MyContext);
  useEffect(
    () => {
      const fetchData = async () => {
        const res = await fetch(
          "http://121.89.205.189:3001/api/pro/list"
        ).then(res => res.json());
        dispatch({
          type: "CHANGE_PRO_LIST",
          payload: res.data
        });
      };
      fetchData();
    },
    [dispatch]
  );

  return (
    <>
    <h1>Home{state.userName}</h1>
    <ul>
      {
        state.proList.map(item=>(
          <li key={item.proid}>{item.proname}</li>
          
        ))
      }
      <button onClick={()=>{dispatch({
        type:"CHANGE_USER_NAME",
        payload:"你爹"
      })}}>修改姓名</button>
    </ul>
    </>
  )
};

const List = () =>{
  const { state, dispatch } = useContext(MyContext);

  return (<>
  <h1>List{state.count}</h1>
      <ul>
        {
          state.proList && state.proList.map(item => (
            <li key = { item.proid }> { item.proname } </li>
          ))
        }
        <button onClick={()=>{dispatch({
        type:"CHANGE_COUNT",
        payload:500
      })}}>修改数字</button>
      </ul>
  </>)
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <div>
    <MyContext.Provider value = {{
    state,
    dispatch
  }}>
      <Home />
      <List />
    </MyContext.Provider></div>;
};

export default App;
