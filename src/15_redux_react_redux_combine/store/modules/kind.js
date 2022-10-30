// 单独管理kind模块的状态管理器
const reducer = (state = {
  kindList: []
}, { type, payload }) => {
  switch (type) {
    case 'CHANGE_KIND_LIST':
      return { ...state, kindList: payload }
    default:
      return state
  }
}

export default reducer