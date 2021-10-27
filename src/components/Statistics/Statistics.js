import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    total > 0 && (
      <div className="Statistics-block">
        <span className="Statistic">Good: {good}</span>
        <span className="Statistic">Neutral: {neutral}</span>
        <span className="Statistic">Bad: {bad}</span>

        <div>
          <span className="Statistic-total">Total: {total}</span>
          <span className="Statistic">
            Positive Feedback: {positivePercentage}%
          </span>
        </div>
      </div>
    )
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
