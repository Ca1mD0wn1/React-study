import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import home from './modules/home'
import kind from './modules/kind'

const reducer = combineReducers({
  home,
  kind
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store