import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PhoneBookState {
    contacts: [];
    filter: string;
}

const initialState: PhoneBookState = {
    contacts: [],
    filter: "",
}

export const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    
  },
})

export const {  } = phoneBookSlice.actions

export default phoneBookSlice.reducer

