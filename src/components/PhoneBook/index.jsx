import css from 'components/PhoneBook/index.module.css';
import React, { useEffect } from 'react';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { Form } from 'components/Form';
import { useDispatch, useSelector } from 'react-redux';
import { operations } from 'store/phoneBook.slice.ts';
import { getIsLoading, getError } from 'store/selectors';

export const PhoneBook = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  if (error) {
    return <b>Something went wrong: {error}</b>;
  }

  return (
    <div className={css.phonebook}>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />

      {isLoading ? <b>Request in progress...</b> : <ContactList />}
    </div>
  );
};
