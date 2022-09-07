import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ratio, correct, incorrect } from '../reducers/scoreSlice';

const Score = ({ correctAnswer, userAnswer, taskWord }) => {

  const dispatch = useDispatch()
  const {correctAnswers, incorrectAnswers, answerRatio} = useSelector(state => state.score)

  useEffect(() => {
    if (userAnswer) {
      if (correctAnswer == userAnswer) {
        dispatch(ratio())
        dispatch(correct())

      } else {
        dispatch(incorrect())
      }
    }
  }, [taskWord]);

  useEffect(() => {
    if (userAnswer) {
      dispatch(ratio())
    }
  }, [correctAnswers, incorrectAnswers]);

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
