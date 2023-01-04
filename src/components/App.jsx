import { Component } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = e => {
    const { name } = e.target;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotal() {
    const feedBackTotal = this.state.good + this.state.bad + this.state.neutral;
    return feedBackTotal;
  }

  countPositiveFeedbackPercentage() {
    const sumFeedback = this.state.good + this.state.bad + this.state.neutral;
    const positivePercentage = Math.ceil((this.state.good * 100) / sumFeedback);
    return positivePercentage;
  }

  render() {
    const result = this.countTotal();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.countTotalFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {result > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotal()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </>
    );
  }
}
