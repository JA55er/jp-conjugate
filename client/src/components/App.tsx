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
// import 'typeface-roboto';
import '../styles/index.css';
// import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../hooks';

const App = () => {
  const dispatch = useAppDispatch();
  // const dispatch = useDispatch();

  //loads initial verb to conjugate
  useEffect(() => {
    loadWord();
  }, []);

  
  const loadWord = async () => {
    const verb = await getVerb();
    dispatch(taskWordReducer(verb));
  };

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
