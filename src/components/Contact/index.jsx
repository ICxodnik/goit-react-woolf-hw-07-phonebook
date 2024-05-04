import React from 'react';
import css from 'components/Contact/index.module.css';

export const Contact = props => {
  return (
    <div className={css.contactData}>
      <span className={css.name}>{props.data.name}</span>
      <span className={css.number}>+{props.data.number}</span>
    </div>
  );
};
