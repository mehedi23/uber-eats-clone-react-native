import { configureStore } from '@reduxjs/toolkit';
import foodItem from './foodItem'

export const store = configureStore({
  reducer: {
    foodItem
  },
})