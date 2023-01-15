// import React, { Component } from 'react';
import {useState} from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistic from './Statistic/Statistic';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import css from './App.module.css';

export default function App(){
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const ollFeedback = good + neutral + bad;

 const countPositivePercentage = () => {
    return Math.round((good / ollFeedback) * 100);
  };

  const leaveFeedback = (e) => {
    switch (e.target.name) {
      case 'good':
        return setGood(prevState => prevState + 1);
        break;
        case 'neutral':
          return setNeutral(prevState => prevState + 1);
          break;
        case 'bad':
          return setBad(prevState => prevState + 1);
          break;
          default:
          return;
      }
	};
 
  const renderOptions = ['good', 'neutral', 'bad'];

  return (<div className={css.container}>
    <Section title="Please leave feedback">
        <FeedbackOptions options={renderOptions}
         onLeaveFeedback={leaveFeedback}
         />
    </Section>
    {ollFeedback === 0 ? (<Notification message="No feedback given"/>) : (<Section title={"Statistics"}>
    <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={ollFeedback}
          positivePercentage={countPositivePercentage()}
        />
      </Section>) }		
  </div>)
}

