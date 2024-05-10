import { configureStore } from '@reduxjs/toolkit'
import phoneBookReducer from './phoneBook.slice'

export const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch