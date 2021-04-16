import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="Statistics-block">
      <h1>Statistics</h1>

      <span className="Statistic">Good: {good}</span>
      <span className="Statistic">Neutral: {neutral}</span>
      <span className="Statistic">Bad: {bad}</span>

      <div>
        <span className="Statistic">Total: {total}</span>
        <span className="Statistic">
          Positive Feedback: {positivePercentage}%
        </span>
      </div>
    </div>
  );
};

Statistics.protoTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistics;
