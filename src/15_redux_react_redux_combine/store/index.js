import { combineReducers, createStore } from 'redux'
import home from './modules/home'
import kind from './modules/kind'

const reducer = combineReducers({
  home,
  kind
})

const store = createStore(reducer)

export default store