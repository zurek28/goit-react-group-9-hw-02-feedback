import { Component } from 'react';
import css from './Statistics.module.css';

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
