import PropTypes from 'prop-types';
import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.btn_list}>
    {options.map(option => (
      <li key={option}>
        <button
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
  
  )
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
