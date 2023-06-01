import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

export class Button extends Component {
  render() {
    const { name, onClick } = this.props;
    return (
      <button className={css.button} name={name} onClick={onClick}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
