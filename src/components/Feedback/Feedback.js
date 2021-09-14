import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

import s from './Feedback.module.css';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = [{ name: 'good' }, { name: 'bad' }, { name: 'neutral' }];

  const total = good + bad + neutral;

  const onLeaveFeedback = event => {
    switch (event.target.name) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const positivePercentage = () => {
    if (total === 0) return 0;
    return Math.round((good * 100) / total);
  };

  return (
    <div className={s.feedback}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      {total === 0 ? (
        <Notification />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage()}
          />
        </Section>
      )}
    </div>
  );
}
