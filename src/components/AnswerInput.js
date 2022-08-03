import React, { useEffect, useRef, useState } from 'react';
import getVerb from '../api/getVerb';

import * as wanakana from 'wanakana';

const AnswerInput = ({ setTaskWord, setUserAnswer, resultPhase, setResultPhase, result }) => {
  const [answer, setAnswer] = useState('');

  const [loadTaskWord, setLoadTaskWord] = useState({});

  const inputRef = useRef(null);

  useEffect(() => {
    const wana = wanakana.toKana(answer);
    if (wana !== answer) {
      setAnswer(wana);
    }
  }, [answer]);

  const focus = () => {
    setTimeout(() => {
      inputRef.current.focus();
    }, 100);
  };

  const onInputChange = async (e) => {
    setAnswer(e.target.value);
  };

  const onInputSubmit = async (e) => {
    e.preventDefault();
    if (!answer) {
      window.alert('input answer!');
    } else {
      if (!resultPhase) {
        
        setUserAnswer(answer);
        setResultPhase(!resultPhase);
        let newVerb = await getVerb();
        if (newVerb == loadTaskWord) {
          newVerb = await getVerb();
        }
        setLoadTaskWord(newVerb);
      } else {
        setTaskWord(loadTaskWord);
        setAnswer('');
        setResultPhase(!resultPhase);
      }
    }
  };

  return (
    <form className='inputForm' onSubmit={(e) => onInputSubmit(e)}>
      <input
        style={{ backgroundColor: result }}
        id='answer-input'
        ref={inputRef}
        className='answerInput'
        value={answer}
        onChange={(e) => onInputChange(e)}
        autoFocus
        spellCheck='false'
        autoComplete='off'
        onBlur={() => {
          focus();
        }}
      ></input>
    </form>
  );
};

export default AnswerInput;
