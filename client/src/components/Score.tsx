// import { useSelector } from 'react-redux';
import React from 'react';
// import { useAppSelector } from '../store';

import { useAppSelector } from '../hooks';

//displays the user score
const Score = () => {
  const { correctAnswers, incorrectAnswers, answerRatio } = useAppSelector(
    (state) => state.score
  );
  // const { correctAnswers, incorrectAnswers, answerRatio } = useSelector(
  //   (state) => state.score
  // );

  return (
    <div className='score'>
      <p className='correct'>{correctAnswers}</p>
      <p>/</p>
      <p className='wrong'>{incorrectAnswers}</p>
      <p>/</p>
      <p className='ratio'>{answerRatio}%</p>
    </div>
  );
};

export default Score;
