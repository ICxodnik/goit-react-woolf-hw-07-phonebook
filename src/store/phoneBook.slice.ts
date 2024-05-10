import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PhoneBookState {
    contacts: Contact[];
    filter: string;
}

const initialState: PhoneBookState = {
    contacts: [],
    filter: "",
}

export interface Contact {
    id: string;
    name: string;
    number: string;
}

export const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
        state.contacts.push(action.payload)
    },
    deleteContact: (state, action: PayloadAction<string>) => {
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
    },
    setFilter: (state, action: PayloadAction<string>) => {
        state.filter = action.payload
    },
  },
})

export const { addContact, deleteContact, setFilter } = phoneBookSlice.actions

export default phoneBookSlice.reducer

