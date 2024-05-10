import { RootState } from "store";

export const getContacts = (state: RootState) => state.phoneBook.items;
export const getIsLoading = (state: RootState) => state.phoneBook.isLoading;
export const getError = (state: RootState) => state.phoneBook.error;
export const getFilter = (state: RootState) => state.phoneBook.filter;
