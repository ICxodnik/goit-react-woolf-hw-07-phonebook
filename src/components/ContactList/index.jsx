import React from 'react';
import { Contact } from 'components/Contact';
import css from 'components/ContactList/index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { operations } from 'store/phoneBook.slice.ts';
import { getFilteredContacts } from 'store/selectors';

export const ContactList = props => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  const handleDelete = id => {
    dispatch(operations.deleteContact(id));
  };

  return (
    <ul className={css.contactList}>
      {contacts.map((el, number) => (
        <li className={css.contact} key={el.id}>
          <span>{number + 1}.</span>
          <Contact data={el} />
          <button onClick={() => handleDelete(el.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
