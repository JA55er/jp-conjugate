import React, { useState, useEffect } from 'react';
import Header from './Header';
import WordToConjugate from './WordToConjugate';
import FormTask from './FormTask';
import AnswerInput from './AnswerInput';
import GivenWordForm from './GivenWordForm';
import Score from './Score';
import Fieldset from './Fieldset';

import { resultReducer, taskWordReducer } from '../reducers/taskSlice';
import getVerb from '../api/getVerb';
import 'typeface-roboto';
import '../styles/index.css';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const { correctAnswer, resultPhase } = useSelector(
    (state) => state.answer
  );

  const [userAnswer, setUserAnswer] = useState('');

  useEffect(() => {
    loadWord();
  }, []);

  useEffect(() => {
    resultColor();
  }, [resultPhase]);

  const loadWord = async () => {
    const verb = await getVerb();
    dispatch(taskWordReducer(verb));
  };

  const resultColor = () => {
    if (userAnswer && resultPhase) {
      if (userAnswer === correctAnswer) {
        dispatch(resultReducer('#00FF00'));
      } else {
        dispatch(resultReducer('#ED4337'));
      }
    } else {
      dispatch(resultReducer('#fff'));
    }
  };

  console.log(correctAnswer);

  return (
    <>
      <Header name={'Verb Conjugation'} />
      <WordToConjugate
        resultPhase={resultPhase}
        correctAnswer={correctAnswer}
      />
      <FormTask />
      <AnswerInput setUserAnswer={setUserAnswer} resultPhase={resultPhase} />
      <GivenWordForm />
      <Score
        userAnswer={userAnswer}
        correctAnswer={correctAnswer}
        resultPhase={resultPhase}
      />
      <Fieldset />
    </>
  );
};

export default App;
