import { configureStore } from '@reduxjs/toolkit'
import demo from './demo'

export const store = configureStore({
  reducer: {
    demo
  },
})