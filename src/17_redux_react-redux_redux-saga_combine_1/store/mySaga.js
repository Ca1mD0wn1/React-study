import { put, call, takeLatest } from 'redux-saga/effects'

import { getBannerList, getProList } from '../api/home'
import { getKindList } from '../api/kind'


function* getBannerListAction() {
  console.log('banner')

  const res = yield call(getBannerList)
  console.log('banner')
  yield put({
    type: 'CHANGE_BANNER_LIST',
    payload: res.data
  })
}

function* getProListAction(action) {
  console.log("Pro");
  const res = yield call(getProList, action.payload)
  console.log("Pro", res.data);
  yield put({
    type: 'CHANGE_PRO_LIST',
    payload: res.data
  })
}

function* getKindListAction() {
  console.log('kind')
  const res = yield call(getKindList)
  console.log('kind', res.data)
  yield put({
    type: 'CHANGE_KIND_LIST',
    payload: res.data
  })
}

function* mySaga() {
  yield takeLatest('REQUEST_BANNER', getBannerListAction)
  yield takeLatest('REQUEST_PRO', getProListAction)
  yield takeLatest('REQUEST_KIND', getKindListAction)
}

export default mySaga