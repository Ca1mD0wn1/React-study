// put 类似 dispatch put({ type: '', payload: ''}) 触发状态的修改
// call 用来调用数据请求   call(getBannerList)  ===>    getBannerList()
// takeLatest 用来响应触发哪一个异步操作
import { put, call, takeLatest } from 'redux-saga/effects'

import { getBannerList, getProList } from '../api/home'
import { getKindList } from '../api/kind'

// 异步操作
function * getBannerListAction () {
  const res = yield call(getBannerList)
  console.log('banner', res.data)
  // 修改状态
  yield put({
    type: 'CHANGE_BANNER_LIST',
    payload: res.data
  })
}

function * getProListAction (action) {
  console.log(111, action)
  const res = yield call(getProList, action.payload)
  console.log('pro', res.data)
  yield put({
    type: 'CHANGE_PRO_LIST',
    payload: res.data
  })
}

function * getKindListAction () {
  const res = yield call(getKindList)
  console.log('kind', res.data)
  yield put({
    type: 'CHANGE_KIND_LIST',
    payload: res.data
  })
}

// 定义异步触发的条件
function * mySaga () {
  // 组件触发 REQUEST_BANNER 即可执行 getBannerListAction 异步行为
  yield takeLatest('REQUEST_BANNER', getBannerListAction)
  // 组件触发 REQUEST_PRO 即可执行 getProListAction 异步行为
  yield takeLatest('REQUEST_PRO', getProListAction)
   // 组件触发 REQUEST_KIND 即可执行 getKindListAction 异步行为
  yield takeLatest('REQUEST_KIND', getKindListAction)
}

export default mySaga