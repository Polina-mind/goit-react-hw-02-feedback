import React, { Component } from 'react';
import Section from './components/Section';
// import Statistics from './components/Statistics';
// import FeedbackOptions from './components/FeedbackOptions';
// import Notification from './components/Notification';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onLeaveFeedback = event => {
    const key = event.currentTarget.textContent;

    if (key === 'good') {
      this.setState(prevState => {
        return {
          good: prevState.good + 1,
        };
      });
    } else if (key === 'neutral') {
      this.setState(prevState => {
        return {
          neutral: prevState.neutral + 1,
        };
      });
    } else if (key === 'bad') {
      this.setState(prevState => {
        return {
          bad: prevState.bad + 1,
        };
      });
    }
  };

  render() {
    // const { statistic } = this.state;
    const { good, neutral, bad } = this.state;

    const totalStatisticCount = Number(good) + Number(neutral) + Number(bad);

    const positivePercentage = Math.round(
      (Number(good) / totalStatisticCount) * 100,
    );

    console.log(totalStatisticCount);
    return (
      <>
        <Section
          title="Please leave feedback"
          options={this.state}
          onLeaveFeedback={this.onLeaveFeedback}
          message={!totalStatisticCount && 'No feedback given'}
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalStatisticCount}
          positivePercentage={positivePercentage}
        ></Section>

        {/* <h1 className="Title">Please leave feedback</h1> */}

        {/* <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onLeaveFeedback}
        ></FeedbackOptions>

        <Notification
          message={!totalStatisticCount && 'No feedback given'}
        ></Notification>

        <Statistics
          totalStatisticCount
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalStatisticCount}
          positivePercentage={positivePercentage}
        ></Statistics> */}
      </>
    );
  }
}

export default App;
