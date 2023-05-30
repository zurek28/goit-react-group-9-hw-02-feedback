import { Component } from 'react';
import css from './Section.module.css';

import PropTypes from 'prop-types';

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

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
