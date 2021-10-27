import React, { Component } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onLeaveFeedback = event => {
    event.preventDefault();

    const key = event.currentTarget.textContent;
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalStatisticCount = good + neutral + bad;
    const positivePercentage = Math.round((good / totalStatisticCount) * 100);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalStatisticCount}
            positivePercentage={positivePercentage}
          ></Statistics>
        </Section>

        {totalStatisticCount === 0 && (
          <Notification message="No feedback given"></Notification>
        )}
      </>
    );
  }
}

export default App;
