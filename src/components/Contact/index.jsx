import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from 'components/Contact/index.module.css';

export default class Contact extends Component {
  static propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    }),
  };

  render() {
    return (
      <li className={css.contactData}>
        <span className={css.name}>{this.props.data.name}</span>
        <span className={css.number}>+{this.props.data.number}</span>
      </li>
    );
  }
}
