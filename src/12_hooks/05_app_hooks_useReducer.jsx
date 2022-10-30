import React, { useReducer, useEffect } from "react";

const initialState = {
  bannerList: [],
  proList: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_BANNER_LIST":
      return { ...state, bannerList: action.payload };
    case "UPDATE_PRO_LIST":
      return { ...state, proList: action.payload };
    default:
      return state;
  }
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://121.89.205.189:3001/api/banner/list").then(res => {
      res.json().then(res => {
        dispatch({
          type: "CHANGE_BANNER_LIST",
          payload: res.data
        });
      });
    });
  }, []);

  useEffect(() => {
    fetch("http://121.89.205.189:3001/api/pro/list").then(res => {
      res.json().then(res => {
        dispatch({
          type: "UPDATE_PRO_LIST",
          payload: res.data
        });
      });
    });
  }, []);
  return (
    <div>
      {state.bannerList &&
        state.bannerList.map(item =>
          <img
            key={item.bannerid}
            alt={item.alt}
            src={item.img}
            style={{ height: 100 }}
          />
        )}

      <ul>
        {state.proList &&
          state.proList.map(item =>
            <li key={item.proid}>
              {" "}{item.proname}{" "}
            </li>
          )}
      </ul>
    </div>
  );
};

export default App;
