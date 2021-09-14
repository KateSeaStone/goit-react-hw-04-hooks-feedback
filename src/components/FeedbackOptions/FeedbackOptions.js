import React from 'react';
import PropTypes from 'prop-types';

import s from '../Feedback/Feedback.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <>
    {options.map(option => {
      return (
        <button
          key={option.name}
          className={s.button}
          name={option.name}
          type="button"
          onClick={onLeaveFeedback}
        >
          {option.name}
        </button>
      );
    })}
  </>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
