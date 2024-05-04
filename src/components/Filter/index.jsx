import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from 'components/Filter/index.module.css';

export default class Filter extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
  };

  render() {
    return (
      <div className={css.filter}>
        <span>Find contact by name</span>
        <input
          value={this.props.value}
          onChange={e => this.props.onChange(e.currentTarget.value)}
        ></input>
      </div>
    );
  }
}
