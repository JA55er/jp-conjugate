import React, { useEffect, useState } from 'react';

const Score = ({ correctAnswer, userAnswer, taskWord }) => {

  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [ratio, setRatio] = useState(0);

  useEffect(() => {
    if (userAnswer) {
      if (correctAnswer == userAnswer) {
        setCorrect(correct + 1);
        setRatio((correct / (correct + incorrect)) * 100);
      } else {
        setIncorrect(incorrect + 1);
      }
    }
  }, [taskWord]);

  useEffect(() => {
    if (userAnswer) {
      setRatio(Math.round((correct / (correct + incorrect)) * 100));
    }
  }, [correct, incorrect]);

  return (
    <div className='score'>
      <p className='correct'>{correct}</p>
      <p>/</p>
      <p className='wrong'>{incorrect}</p>
      <p>/</p>
      <p className='ratio'>{ratio}%</p>
    </div>
  );
};

export default Score;
