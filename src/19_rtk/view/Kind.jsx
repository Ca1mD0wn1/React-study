import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getKindList } from "../api/kind";
import { changeKindList } from "../store/modules/kind";
const Kind = () => {
  const kindList = useSelector(state => state.kind.kindList);

  const dispatch = useDispatch();

  useEffect(
    () => {
      getKindList().then(res => {
        dispatch(changeKindList(res.data));
      });
    },
    [dispatch]
  );
  return (
    <div>
      <h1>Kind</h1>
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

export default Kind;
