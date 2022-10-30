import React, { useEffect } from "react";
import { connect } from "react-redux";
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
      dispatch({ type: "REQUEST_KIND" });
    }
  })
)(Kind);
