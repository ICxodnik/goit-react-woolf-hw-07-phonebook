import { RootState } from "store";

export const getContacts = (state: RootState) => state.phoneBook.items;
export const getIsLoading = (state: RootState) => state.phoneBook.isLoading;
export const getError = (state: RootState) => state.phoneBook.error;
export const getFilter = (state: RootState) => state.phoneBook.filter;
export const getFilteredContacts = (state: RootState) => {
    const contacts = getContacts(state);
    const filter = getFilter(state);
    
    let stringFilter = filter.toLowerCase().trim();
    if (!stringFilter) {
      return contacts;
    }
    return contacts.filter(el => el.name.toLowerCase().includes(stringFilter));
}
