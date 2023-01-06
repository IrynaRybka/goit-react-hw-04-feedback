import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistic.module.css'

const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div>
    <ul>
      <li>
        Good:
        <span className={css.property}>{good}</span>
      </li>
      <li>
        Netural:
        <span className={css.property}>{neutral}</span>
      </li>
      <li>
        Bad:
        <span className={css.property}>{bad}</span>
      </li>
      <li>
        Total:
        <span className={css.property}>{total}</span>
      </li>
      <li>
        Positive feedback:
        <span className={css.property}>{positivePercentage}%</span>
      </li>
    </ul>
  </div>
);

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

export default Statistic;