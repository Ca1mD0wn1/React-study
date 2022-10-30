const reducer =  (state = {
  bannerList: [],
  proList: []
}, { type, payload }) => {
  switch (type) {
    case 'CHANGE_BANNER_LIST':
      return { ...state, bannerList: payload }
    case 'CHANGE_PRO_LIST':
      return { ...state, proList: payload }
    default:
      return state
  }
}
export default reducer