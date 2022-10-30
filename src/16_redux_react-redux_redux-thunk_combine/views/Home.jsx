import React, { useEffect } from "react";
import { connect } from "react-redux";
import action from "../store/actions/home";

const Home = ({ bannerList, proList, getBannerListData, getProListData }) => {
  useEffect(
    () => {
      getBannerListData();
      getProListData();
    },
    [getBannerListData, getProListData]
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

export default connect(
  ({ home: { bannerList, proList } }) => ({ bannerList, proList }),
  dispatch => ({
    getBannerListData() {
      dispatch(action.getBannerListAction);
    },
    getProListData() {
      dispatch(action.getProListAction({ limitNum: 12 }));
    }
  })
)(Home);

// export default connect(
//   ({ home: { bannerList, proList }}) => ({ bannerList, proList }),
//   (dispatch) => ({

//       dispatch(action.getBannerListAction)

//     },
//     getProListData () {

//       dispatch(action.getProListAction({ limitNum: 12 }))
//     }
//   })
// )(Home);
