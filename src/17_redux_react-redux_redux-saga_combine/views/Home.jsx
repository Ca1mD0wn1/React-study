import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux'
const Home = ({ bannerList, proList, dispatch }) => {
  useEffect(() => {
    // 触发某个行为，从而触发 异步操作
    dispatch({ type: 'REQUEST_BANNER' })
    dispatch({ type: 'REQUEST_PRO', payload: { limitNum: 3 } })
  }, [dispatch])
  return (
    <div>
      <h1>Home</h1>
      <div>
        { 
          bannerList && bannerList.map(item => (
            <img key = { item.bannerid } src={ item.img } alt={item.alt} style={{ height: 100 }} />
          ))
        }
      </div>
      <ul>
        {
          proList && proList.map(item => {
            return (<li key = { item.proid }>{ item.proname }</li>)
          })
        }
      </ul>
    </div>
  );
};

export default connect(
  ({ home: { bannerList, proList }}) => ({ bannerList, proList })
)(Home);