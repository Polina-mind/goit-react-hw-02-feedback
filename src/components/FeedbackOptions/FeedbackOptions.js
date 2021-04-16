import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="Buttons">
      {Object.keys(options).map(key => (
        <button
          key={key}
          type="button"
          className="Button"
          onClick={onLeaveFeedback}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.protoTypes = {
  options: PropTypes.object.isRequired,
  //   onLeaveFeedback: PropTypes.object.isRequired,
};

export default FeedbackOptions;
