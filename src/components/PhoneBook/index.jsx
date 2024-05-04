import css from 'components/PhoneBook/index.module.css';
import React, { Component } from 'react';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Form from 'components/Form';

export default class PhoneBook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const string = localStorage.getItem('contacts');
    const contacts = string ? JSON.parse(string) : [];
    this.setState({ contacts: contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  handleSubmit = user => {
    if (this.state.contacts.some(x => x.name === user.name)) {
      alert(`${user.name} is already in contacts.`);
      return false;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, user],
        filter: '',
      };
    });
    return true;
  };

  handleFilter = value => {
    this.setState({ filter: value });
  };

  handleDelete = id => {
    this.setState(prevState => {
      return {
        contacts: this.state.contacts.filter(x => x.id !== id),
      };
    });
  };

  getFilteredData() {
    let filter = this.state.filter.toLowerCase().trim();
    if (!filter) {
      return this.state.contacts;
    }
    return this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(filter)
    );
  }

  render() {
    return (
      <div className={css.phonebook}>
        <h1>Phonebook</h1>
        <Form onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleFilter} value={this.state.filter} />
        <ContactList
          contacts={this.getFilteredData()}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
