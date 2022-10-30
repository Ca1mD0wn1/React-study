import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
const Home = ({ bannerList, proList, dispatch }) => {
  useEffect(
    () => {
      fetch("http://121.89.205.189:3001/api/banner/list")
        .then(res => res.json())
        .then(res => {
          dispatch({
            type: "CHANGE_BANNER_LIST",
            payload: res.data
          });
        });
      fetch("http://121.89.205.189:3001/api/pro/list")
        .then(res => res.json())
        .then(res => {
          dispatch({
            type: "CHANGE_PRO_LIST",
            payload: res.data
          });
        });
    },
    [dispatch]
  );
  return (
    <div>
      <h1>Home</h1>
      <div>
        {bannerList &&
          bannerList.map(item =>
            <img
              key={item.bannerid}
              src={item.img}
              alt={item.alt}
              style={{ height: 100 }}
            />
          )}
      </div>
      <ul>
        {proList &&
          proList.map(item => {
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

export default connect(({ home: { bannerList, proList } }) => ({
  bannerList,
  proList
}))(Home);
