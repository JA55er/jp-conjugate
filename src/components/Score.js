import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { scoreCount } from '../reducers/scoreSlice';

const Score = ({ correctAnswer, userAnswer, resultPhase }) => {
  const dispatch = useDispatch();
  const { correctAnswers, incorrectAnswers, answerRatio } = useSelector(
    (state) => state.score
  );

  useEffect(() => {
    if (resultPhase) {
      dispatch(scoreCount(correctAnswer === userAnswer));
    }
  }, [resultPhase]);

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
