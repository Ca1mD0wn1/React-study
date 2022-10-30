import React from "react";
import { connect } from "react-redux";
import action from "../store/actions/kind";
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
      {console.log(kindList)}
      {kindList &&
        kindList.map(item => {
          return (
            <p key={item}>
              {item}
            </p>
          );
        })}
    </div>
  );
};

export default connect(
  ({ kind: { kindList } }) => ({
    kindList
  }),
  dispatch => ({
    getKindListData() {
      dispatch(action.getKindListAction);
    }
  })
)(Kind);
