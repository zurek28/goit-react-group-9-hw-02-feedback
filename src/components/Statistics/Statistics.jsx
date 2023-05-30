import { Component } from 'react';
import css from './Statistics.module.css';

import PropTypes from 'prop-types';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, totalFeedback, positiveFeedback } = this.props;
    return (
      <div className={css.statistics}>
        {totalFeedback() ? (
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {totalFeedback()}</li>
            <li>Positive: {positiveFeedback()}%</li>
          </ul>
        ) : (
          <span>No feedback given</span>
        )}
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  totalFeedback: PropTypes.func.isRequired,
  positiveFeedback: PropTypes.func.isRequired,
};
