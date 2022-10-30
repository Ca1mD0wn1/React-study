import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleWare from 'redux-saga' // 导入生成中间件的函数

import mySaga from './mySaga' // 异步行为

// 分模块
import home from './modules/home'
import kind from './modules/kind'

const reducer = combineReducers({ home, kind })

const middleware = createSagaMiddleWare()

const store = createStore(reducer, applyMiddleware(middleware))

middleware.run(mySaga)

export default store
