import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ratio, correct, incorrect } from '../reducers/scoreSlice';

const Score = ({ correctAnswer, userAnswer, taskWord }) => {

  const dispatch = useDispatch()
  const {correctAnswers, incorrectAnswers, answerRatio} = useSelector(state => state.score)

  // const [correct, setCorrect] = useState(0);
  // const [incorrect, setIncorrect] = useState(0);
  // const [ratio, setRatio] = useState(0);

  useEffect(() => {
    if (userAnswer) {
      if (correctAnswer == userAnswer) {
        // setCorrect(correct + 1);
        // setRatio((correct / (correct + incorrect)) * 100);
        dispatch(ratio())
        dispatch(correct())

      } else {
        // setIncorrect(incorrect + 1);
        dispatch(incorrect())
      }
    }
  }, [taskWord]);

  useEffect(() => {
    if (userAnswer) {
      // setRatio(Math.round((correct / (correct + incorrect)) * 100));
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
  // // const [correct, setCorrect] = useState(0);
  // // const [incorrect, setIncorrect] = useState(0);
  // // const [ratio, setRatio] = useState(0);

  // useEffect(() => {
  //   if (userAnswer) {
  //     if (correctAnswer == userAnswer) {
  //       // setCorrect(correct + 1);
  //       // setRatio((correct / (correct + incorrect)) * 100);
  //       dispatch(correct()),
  //       dispatch(ratio())

  //     } else {
  //       // setIncorrect(incorrect + 1);
  //       dispatch(incorrect())
  //     }
  //   }
  // }, [taskWord]);

  // useEffect(() => {
  //   if (userAnswer) {
  //     // setRatio(Math.round((correct / (correct + incorrect)) * 100));
  //     dispatch(ratio())
  //   }
  // }, [correct, incorrect]);

  // return (
  //   <div className='score'>
  //     <p className='correct'>{correct}</p>
  //     <p>/</p>
  //     <p className='wrong'>{incorrect}</p>
  //     <p>/</p>
  //     <p className='ratio'>{ratio}%</p>
  //   </div>
  // );
};

export default Score;
