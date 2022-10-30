import React, { useEffect } from "react";
import { connect } from "react-redux";
const Kind = props => {
  const { kindList, getKindListData } = props;

  useEffect(
    () => {
      getKindListData();
    },
    [getKindListData]
  );
  return (
    <div>
      <h3>kind</h3>
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

const mapStateToProps = state => {
  return {
    kindList: state.kindList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getKindListData() {
      // 返回自定义函数，供 展示组件调用，展示组件通过 props 访问即可
      fetch("http://121.89.205.189:3001/api/pro/categorylist")
        .then(res => res.json())
        .then(res => {
          console.log(res.data);
          // 修改状态
          dispatch({
            type: "CHANGE_KIND_LIST",
            payload: res.data
          });
        });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Kind);
