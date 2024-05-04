import React from 'react';
import { Contact } from 'components/Contact';
import css from 'components/ContactList/index.module.css';

export const ContactList = props => {
  return (
    <ul className={css.contactList}>
      {props.contacts.map((el, number) => (
        <li className={css.contact} key={el.id}>
          <span>{++number}.</span>
          <Contact data={el} />
          <button onClick={() => props.handleDelete(el.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
