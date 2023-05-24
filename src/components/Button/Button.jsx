import { Component } from 'react';
import css from './Button.module.css';

export class Button extends Component {
  render() {
    const { name, handleClick } = this.props;
    return (
      <>
        <button className={css.button} name={name} onClick={handleClick}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </button>
      </>
    );
  }
}
