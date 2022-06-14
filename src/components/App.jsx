import { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Section from './Section';
import s from './App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const stateObj = { good, neutral, bad };
  const stateKeys = Object.keys(stateObj);
  const stateEntries = Object.entries(stateObj);
  
  const leaveFeedback = (type) => {
switch (type) {
  case 'good':
    setGood(prevState => prevState + 1);
    break;

   case 'neutral':
    setNeutral(prevState => prevState + 1);
    break;
   case 'bad':
    setBad(prevState => prevState + 1);
    break;
  
  default:
    break;
}
  };
  const totalFeedback = good + neutral + bad;

 const countPositiveFeedbackPercentage = () => {
    return Math.trunc(good / totalFeedback * 100);
  }

  return (
    <div className={s.container}>
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={stateKeys}
            onLeaveFeedback={leaveFeedback}
        />
        </Section>
           <Section title="Statistics">
          {totalFeedback > 0 ? <Statistics
            state={stateEntries}
          total={totalFeedback}
            posPersentage={countPositiveFeedbackPercentage()}
          />
                : <Notification message="There is no feedback"/>}
               </Section> 
      </div>
    </div>
  );
}