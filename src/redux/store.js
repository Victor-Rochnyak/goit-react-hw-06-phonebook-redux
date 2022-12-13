import { configureStore } from '@reduxjs/toolkit'
import {contactsReduser} from './contactSlise'

export const store = configureStore({
    reducer: {
      contacts:contactsReduser,
    },
  })