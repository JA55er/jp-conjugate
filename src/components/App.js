import React, { useState, useEffect } from 'react';
import Header from './Header';
import WordToConjugate from './WordToConjugate';
import FormTask from './FormTask';
import AnswerInput from './AnswerInput';
import GivenWordForm from './GivenWordForm';
import Score from './Score';
import Fieldset from './Fieldset';

import { correctAnswerReducer, resultReducer, taskWordReducer } from '../reducers/taskSlice';
import getVerb from '../api/getVerb';

import 'typeface-roboto';
import '../styles/index.css';

import verbs from 'jp-conjugation';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const {correctAnswer, result, resultPhase, taskForm, taskWord} = useSelector((state) => state.answer);

  const [conjArr, setConjArr] = useState({});

  const [userAnswer, setUserAnswer] = useState('');

  useEffect(() => {
    const getWord = async () => {
      const verb = await getVerb()
      dispatch(taskWordReducer(verb))
    };
    getWord();
  }, []);

  useEffect(() => {
    if (taskWord?.verbClass == 1) {
      setConjArr(verbs.conjugate(taskWord?.hiraganaReading));
    } else if (taskWord?.verbClass == 2) {
      setConjArr(verbs.conjugate(taskWord?.hiraganaReading, 'v1'));
    }
  }, [taskWord]);

  useEffect(() => {
    if (Object.keys(conjArr).length) {
      dispatch(
        correctAnswerReducer(conjArr.find((o) => o.name == taskForm))
      );
    }
  }, [conjArr, taskForm]);

  useEffect(() => {
    if (userAnswer && resultPhase) {
      if (userAnswer == correctAnswer) {
        dispatch(resultReducer('#00FF00'))
      } else {
        dispatch(resultReducer('#ED4337'))
      }
    } else {
      dispatch(resultReducer('#fff'))
    }
  }, [resultPhase]);

  console.log(correctAnswer);

  return (
    <>
      <Header name={'Verb Conjugation'} />
      <WordToConjugate
        taskWord={taskWord}
        resultPhase={resultPhase}
        correctAnswer={correctAnswer}
        result={result}
      />
      <FormTask
        task={'Past Form'}
        taskWord={taskWord}
        taskForm={taskForm}
      />
      <AnswerInput
        setUserAnswer={setUserAnswer}
        resultPhase={resultPhase}
        result={result}
      />
      <GivenWordForm taskWord={taskWord} />
      <Score
        userAnswer={userAnswer}
        correctAnswer={correctAnswer}
        taskWord={taskWord}
      />
      <Fieldset />
    </>
  );
};

export default App;
