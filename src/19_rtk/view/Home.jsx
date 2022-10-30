import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { changeBannerList, changeProList } from "./../store/modules/home";
import { getBannerList, getProList } from "../api/home";

const Home = () => {
  const bannerList = useSelector(state => state.home.bannerList);
  const proList = useSelector(state => state.home.proList);
  const dispatch = useDispatch();
  useEffects(
    () => {
      getBannerList().then(res => {
        dispatch(changeBannerList(res.data));
      });
      getProList({ limitNum: 5 }).then(res => {
        dispatch(changeProList(res.data));
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

export default Home;
