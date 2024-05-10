import css from 'components/PhoneBook/index.module.css';
import React, { useEffect } from 'react';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { Form } from 'components/Form';
import { useDispatch, useSelector } from 'react-redux';
import { operations, setFilter } from 'store/phoneBook.slice.ts';
import {
  getContacts,
  getFilter,
  getIsLoading,
  getError,
} from 'store/selectors';

export const PhoneBook = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  const handleSubmit = user => {
    if (contacts.some(x => x.name.toLowerCase() === user.name.toLowerCase())) {
      alert(`${user.name} is already in contacts.`);
      return false;
    }

    dispatch(operations.addContact(user));
    dispatch(setFilter(''));
    return true;
  };

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, []);

  const handleFilter = value => {
    dispatch(setFilter(value));
  };

  const handleDelete = id => {
    dispatch(operations.deleteContact(id));
  };

  function getFilteredData() {
    let stringFilter = filter.toLowerCase().trim();
    if (!stringFilter) {
      return contacts;
    }
    return contacts.filter(el => el.name.toLowerCase().includes(stringFilter));
  }

  if (error) {
    return <b>Something went wrong: {error}</b>;
  }

  return (
    <div className={css.phonebook}>
      <h1>Phonebook</h1>
      <Form onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter onChange={handleFilter} value={filter} />

      {isLoading ? (
        <b>Request in progress...</b>
      ) : (
        <ContactList contacts={getFilteredData()} handleDelete={handleDelete} />
      )}
    </div>
  );
};
