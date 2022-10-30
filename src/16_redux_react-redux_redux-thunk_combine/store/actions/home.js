import { getBannerList, getProList } from '../../api/home'

const action = {
  getBannerListAction(dispatch) {
    getBannerList().then(res => {
      dispatch({
        type: 'CHANGE_BANNER_LIST',
        payload: res.data
      })
    })
  },
  getProListAction(params) {
    return (dispatch) => {
      getProList(params).then(res => {
        dispatch({
          type: 'CHANGE_PRO_LIST',
          payload: res.data
        })
      })
    }
  }
}

export default action