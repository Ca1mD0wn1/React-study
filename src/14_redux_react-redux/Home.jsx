import { connect } from "react-redux";
import React, { useEffect } from "react";

const Home = props => {
  const { proList, dispatch } = props;
  useEffect(
    () => {
      fetch("http://121.89.205.189:3001/api/pro/list")
        .then(res => res.json())
        .then(res => {
          console.log(res.data);
          // 修改状态
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
      <h3>home</h3>
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
// const mapStateToProps = state => {
//   return {
//     proList: state.proList
//   };
// };
const mapStateToProps = ({ proList }) => ({ proList });
export default connect(mapStateToProps)(Home);
