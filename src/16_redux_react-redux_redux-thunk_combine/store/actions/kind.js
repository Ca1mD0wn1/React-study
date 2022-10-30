import { getKindList } from '../../api/kind'

const action = {
  getKindListAction(dispatch) {
    getKindList().then(res => {
      dispatch({
        type: 'CHANGE_KIND_LIST',
        payload: res.data
      })
    })
  }
}

export default action 