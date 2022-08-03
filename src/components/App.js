import React, { useState, useEffect } from 'react';
import Header from './Header';
import WordToConjugate from './WordToConjugate';
import FormTask from './FormTask';
import AnswerInput from './AnswerInput';
import GivenWordForm from './GivenWordForm';
import Score from './Score';
import Fieldset from './Fieldset';

import getVerb from '../api/getVerb';

import 'typeface-roboto';
import '../styles/index.css';

import verbs from 'jp-conjugation';

const App = () => {
  const [taskWord, setTaskWord] = useState({});

  const [formToGet, setFormToGet] = useState('');

  const [conjArr, setConjArr] = useState({});

  const [resultPhase, setResultPhase] = useState(false);

  const [options, setOptions] = useState({
    polite: 1,
    past: 1,
    te: 1,
    negative: 1,
  });

  const [result, setResult] = useState('#F3F3F3');

  const [userAnswer, setUserAnswer] = useState('');

  const [correctAnswer, setCorrectAnswer] = useState('');

  useEffect(() => {
    const getWord = async () => {
      setTaskWord(await getVerb());
    };
    getWord();
  }, []);

  useEffect(() => {
    if (taskWord?.verbClass == 1) {
      console.log(verbs.conjugate(taskWord?.hiraganaReading));
      setConjArr(verbs.conjugate(taskWord?.hiraganaReading));
    } else if (taskWord?.verbClass == 2) {
      setConjArr(verbs.conjugate(taskWord?.hiraganaReading, 'v1'));
    }
  }, [taskWord]);

  useEffect(() => {
    if (userAnswer && resultPhase) {
      if (userAnswer == correctAnswer.form) {
        setResult('#00FF00');
      } else {
        setResult('#ED4337');
      }
    } else {
      setResult('#fff')
    }
  });

  useEffect(() => {
    if (Object.keys(conjArr).length) {
      setCorrectAnswer(conjArr.find((o) => o.name == formToGet));
    }
  }, [conjArr]);

  console.log(correctAnswer?.form);

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
        options={options}
        setFormToGet={setFormToGet}
        taskWord={taskWord}
      />
      <AnswerInput
        setTaskWord={setTaskWord}
        setUserAnswer={setUserAnswer}
        setResultPhase={setResultPhase}
        resultPhase={resultPhase}
        result={result}
      />
      <GivenWordForm taskWord={taskWord} />
      <Score
        userAnswer={userAnswer}
        correctAnswer={correctAnswer?.form}
        taskWord={taskWord}
      />
      <Fieldset setOptions={setOptions} />
    </>
  );
};

export default App;
