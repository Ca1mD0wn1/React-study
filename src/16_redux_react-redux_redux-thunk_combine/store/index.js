import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import home from './modules/home'
import kind from './modules/kind'

const reducer = combineReducers({
  home,
  kind
})

// 第二个参数表示代码中含有异步操作，且异步操作需要提取出 容器组件
const store = createStore(reducer, applyMiddleware(thunk))

export default store