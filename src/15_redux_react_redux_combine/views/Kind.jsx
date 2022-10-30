import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
const Kind = ({ kindList, getKindListData }) => {
  useEffect(
    () => {
      getKindListData();
    },
    [getKindListData]
  );
  return (
    <div>
      <h1>Kind</h1>
      {kindList &&
        kindList.map(item => {
          return (
            <p key={item}>
              {" "}{item}{" "}
            </p>
          );
        })}
    </div>
  );
};

export default connect(
  ({ kind: { kindList } }) => ({ kindList }),
  dispatch => ({
    getKindListData() {
      fetch("http://121.89.205.189:3001/api/pro/categorylist")
        .then(res => res.json())
        .then(res => {
          dispatch({
            type: "CHANGE_KIND_LIST",
            payload: res.data
          });
        });
    }
  })
)(Kind);
