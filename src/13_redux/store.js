import { createStore } from "redux";

const reducer = (state = {
  msg: "hello redux",
  count: 10
}, actions) => {
  switch (actions.type) {
    case "CHANGE_MSG":
      return { ...state, msg: actions.payload }
    case "INCREMENT_COUNT":
      return { ...state, count: state.count + actions.payload }
    case "DE_INCREMENT_COUNT":
      return { ...state, count: state.count - actions.payload }
    default: return state
  }
}
// @@observable: ƒ observable()
// dispatch: ƒ dispatch(action)
// getState: ƒ getState()
// replaceReducer: ƒ replaceReducer(nextReducer)
// subscribe: ƒ subscribe(listener)
const store = createStore(reducer);
export default store;