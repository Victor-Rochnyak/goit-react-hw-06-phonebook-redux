import { configureStore } from '@reduxjs/toolkit'
import contactReduser from './contactSlise'
export const store = configureStore({
    reducer: {
      contacts:contactReduser,
    },
  })