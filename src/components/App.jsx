import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

import css from './App.module.css';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleClick = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedback =
      (this.state.good / this.countTotalFeedback()) * 100;
    return Math.round(positiveFeedback);
  };

  render() {
    return (
      <div className={css.wrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            totalFeedback={this.countTotalFeedback}
            positiveFeedback={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}
