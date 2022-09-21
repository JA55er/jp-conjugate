import React, { useEffect } from 'react';
import Header from './Header';
import WordToConjugate from './WordToConjugate';
import FormTask from './FormTask';
import AnswerInput from './AnswerInput';
import GivenWordForm from './GivenWordForm';
import Score from './Score';
import Fieldset from './Fieldset';

import { taskWordReducer } from '../reducers/taskSlice';
import getVerb from '../api/getVerb';
import 'typeface-roboto';
import '../styles/index.css';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  const { correctAnswer } = useSelector((state) => state.answer);

  useEffect(() => {
    loadWord();
  }, []); // eslint-disable-line

  const loadWord = async () => {
    const verb = await getVerb();
    dispatch(taskWordReducer(verb));
  };

  console.log(correctAnswer);

  return (
    <>
      <Header />
      <WordToConjugate />
      <FormTask />
      <AnswerInput />
      <GivenWordForm />
      <Score />
      <Fieldset />
    </>
  );
};

export default App;
