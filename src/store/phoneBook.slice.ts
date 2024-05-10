import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import * as api from '../api';
export interface PhoneBookState {
  items: Contact[];
  isLoading: boolean;
  error: string | null;

  // better to extract to it's own reducer but not worth it for a single field
  filter: string;
}

const initialState: PhoneBookState = {
  items: [],
  isLoading: false,
  error: null,
  filter: '',
};

export interface Contact {
  id: string;
  name: string;
  number: string;
}

export type CreateContact = Pick<Contact, 'name' | 'number'>;

const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const contacts = await api.fetchContacts();
  return contacts;
});

const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact: CreateContact) => {
    const contacts = await api.addContact(contact);
    return contacts;
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id: string) => {
    const contacts = await api.deleteContact(id);
    return contacts;
  }
);

export const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchContacts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    });
    builder.addMatcher(
      action => action.type.endsWith('/rejected'),
      (state, action) => {
        state.isLoading = false;
        state.error = 'Something went wrong. Try again';
      }
    );
  },
});

export const operations = { fetchContacts, addContact, deleteContact };
export const { setFilter } = phoneBookSlice.actions;

export default phoneBookSlice.reducer;
