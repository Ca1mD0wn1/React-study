import { createStore } from "redux";

const reducer = (state = {
  proList: [],
  kindList: [],
}, { type, payload }) => {
  switch (type) {
    case "CHANGE_PRO_LIST":
      return { ...state, proList: payload }
    case "CHANGE_KIND_LIST":
      return { ...state, kindList: payload }
    default: return state;
  }
}

const store = createStore(reducer);
export default store;