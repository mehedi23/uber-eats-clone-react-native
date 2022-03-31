import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice';
import foodItem from './foodItem'

export const store = configureStore({
  reducer: {
    cartSlice,
    foodItem
  },
})