import React, { Component } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  state = {
    statistic: { good: 1, neutral: 3, bad: 1 },
  };

  // onLeaveFeedback = id => {
  //   this.setState(prevState => {
  //     statistic: prevState.statistic.map(stat => {
  //       id === indexOf(stat) ? statistic[idx] + 1 : statistic[idx];
  //     });
  //   });
  // };

  render() {
    const { statistic } = this.state;

    const totalStatisticCount =
      Number(statistic.good) +
      Number(statistic.neutral) +
      Number(statistic.bad);

    const positivePercentage =
      (Number(statistic.good) / totalStatisticCount) * 100;

    return (
      <>
        <h1 className="Title">Please leave feedback</h1>

        <FeedbackOptions
          options={statistic}
          // onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>

        <Statistics
          good={statistic.good}
          neutral={statistic.neutral}
          bad={statistic.bad}
          total={totalStatisticCount}
          positivePercentage={positivePercentage}
        ></Statistics>

        {/* <Section title=""></Section> */}

        {/* <div>
          <p>Total: {totalStatisticCount}</p>
          <p>Кол-во выполненных: {completedTodoCount}</p>
        </div> */}
        {/* <TodoList todos={todos} onDeleteTodo={this.deleteTodo} /> */}
      </>
    );
  }
}

export default App;
