import { Component } from 'react';
import { Button } from '../Button/Button';

import PropTypes from 'prop-types';

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

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  option: PropTypes.arrayOf(PropTypes.string.isRequired),
};
