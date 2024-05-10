import css from 'components/PhoneBook/index.module.css';
import React, { useEffect } from 'react';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { Form } from 'components/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, setFilter } from 'store/phoneBook.slice.ts'

function getSavedContacts() {
  const string = localStorage.getItem('contacts');
  const contacts = string ? JSON.parse(string) : [];
  return contacts;
}

export const PhoneBook = () => {
  const contacts = useSelector((state) => state.phoneBook.contacts)
  const filter = useSelector((state) => state.phoneBook.filter)
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = user => {
    if (contacts.some(x => x.name === user.name)) {
      alert(`${user.name} is already in contacts.`);
      return false;
    }

    dispatch(addContact(user))
    dispatch(setFilter(''))
    return true;
  };

  const handleFilter = value => {
    dispatch(setFilter(value))
  };

  const handleDelete = id => {
    dispatch(deleteContact(id))
  };

  function getFilteredData() {
    let stringFilter = filter.toLowerCase().trim();
    if (!stringFilter) {
      return contacts;
    }
    return contacts.filter(el => el.name.toLowerCase().includes(stringFilter));
  }

  return (
    <div className={css.phonebook}>
      <h1>Phonebook</h1>
      <Form onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter onChange={handleFilter} value={filter} />
      <ContactList contacts={getFilteredData()} handleDelete={handleDelete} />
    </div>
  );
};
