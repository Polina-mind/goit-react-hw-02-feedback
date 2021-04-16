import React, { Component } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
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

    return (
      <>
        <h1 className="Title">Please leave feedback</h1>

        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onLeaveFeedback}
        ></FeedbackOptions>

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalStatisticCount}
          positivePercentage={positivePercentage}
        ></Statistics>

        {/* <Section title=""></Section> */}
      </>
    );
  }
}

export default App;
