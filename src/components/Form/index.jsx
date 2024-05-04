import React from 'react';
import { nanoid } from 'nanoid';
import css from 'components/Form/index.module.css';

export const Form = props => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const user = {
      name: form.elements.name.value,
      number: form.elements.number.value,
      id: nanoid(),
    };
    let hasReset = props.onSubmit(user);
    hasReset && form.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.input}>
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          maxLength="20"
        />
      </label>
      <label className={css.input}>
        Phone number:
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          maxLength="20"
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};
