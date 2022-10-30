import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleWare from 'redux-saga' // 导入生成中间件的函数

import mySaga from './mySaga' // 异步行为

// 分模块
import home from './modules/home'
import kind from './modules/kind'

const reducer = combineReducers({ home, kind }) // 整合reducer

const middleware = createSagaMiddleWare() // 生成中间件

const store = createStore(reducer, applyMiddleware(middleware)) // 创建状态管理器

middleware.run(mySaga) // 中间件使用异步，放到store创建之后

export default store