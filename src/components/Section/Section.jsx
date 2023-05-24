import { Component } from 'react';
import css from './Section.module.css';

export class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className={css.section}>
        <h5 className={css.title}>{title}</h5>

        {children}
      </div>
    );
  }
}
