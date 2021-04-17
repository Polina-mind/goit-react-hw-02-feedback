import React from 'react';
import PropTypes from 'prop-types';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';
import './Section.css';

const Section = ({
  title,
  options,
  onLeaveFeedback,
  message,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  //   children,
}) => {
  return (
    <section className="Section">
      <h1 className="Title">{title}</h1>

      {/* {children} */}

      <FeedbackOptions
        options={options}
        onLeaveFeedback={onLeaveFeedback}
      ></FeedbackOptions>

      <Notification message={message}></Notification>

      <Statistics
        totalStatisticCount
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      ></Statistics>
    </section>
  );
};

Section.protoTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
