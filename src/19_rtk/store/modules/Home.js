import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    banerList: [],
    proList: []
  },
  reducers: {
    changeBannerList(state, action) {
      state.bannerList = action.payload;
    },
    changeProList(state, action) {
      state.proList = action.payload;
    }
  }
})

export const { changeBannerList, changeProList } = homeSlice.actions

export default homeSlice.reducer 
