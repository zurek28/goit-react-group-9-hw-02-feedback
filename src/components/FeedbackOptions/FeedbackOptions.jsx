import { Component } from 'react';
import { Button } from '../Button/Button';

export class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback, options } = this.props;
    return (
      <div>
        {options.map(option => (
          <Button key={option} name={option} handleClick={onLeaveFeedback} />
        ))}
      </div>
    );
  }
}
