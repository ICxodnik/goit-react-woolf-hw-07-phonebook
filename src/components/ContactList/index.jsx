import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Contact from 'components/Contact';
import css from 'components/ContactList/index.module.css';

export default class ContactList extends Component {
  static propTypes = {
    handleDelete: PropTypes.func,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.string,
      })
    ),
  };

  render() {
    return (
      <ul className={css.contactList}>
        {this.props.contacts.map((el, number) => (
          <div className={css.contact} key={el.id}>
            <span>{++number}.</span>
            <Contact data={el} />
            <button onClick={() => this.props.handleDelete(el.id)}>
              Delete
            </button>
          </div>
        ))}
      </ul>
    );
  }
}
