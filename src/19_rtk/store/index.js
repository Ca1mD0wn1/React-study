import { createSlice } from '@reduxjs/toolkit'
import home from './modules/home'
import kind from './modules/kind'
const store = configStore({
  reducer: {
    home, kind
  }
})

export default store