import { createSlice } from '@reduxjs/toolkit'

export const kindSlice = createSlice({
  name: 'kind',
  initialState: {
    kindList: []
  },
  reducers: {
    changeKindList(state, action) {
      state.kindList = action.payload
    }
  }
})

export const { changeKindList } = kindSlice.actions

export default kindSlice.reducer