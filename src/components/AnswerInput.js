import React, { useEffect, useRef, useState } from 'react';
import getVerb from '../api/getVerb';

import * as wanakana from 'wanakana';
import { useDispatch, useSelector } from 'react-redux';
import {
  resultPhaseReducer,
  resultReducer,
  taskWordReducer,
} from '../reducers/taskSlice';
import { scoreCount } from '../reducers/scoreSlice';

const AnswerInput = () => {
  const dispatch = useDispatch();
  const { resultPhase, result, correctAnswer } = useSelector(
    (state) => state.answer
  );

  const [answer, setAnswer] = useState('');

  const [loadTaskWord, setLoadTaskWord] = useState({});

  const inputRef = useRef(null);

  useEffect(() => {
    const wana = wanakana.toKana(answer, { IMEMode: true });
    if (wana !== answer) {
      setAnswer(wana);
    }
  }, [answer]);

  const focus = () => {
    setTimeout(() => {
      inputRef.current.focus();
    }, 100);
  };

  const onInputChange = (e) => {
    setAnswer(e.target.value);
  };

  const onInputSubmit = async (e) => {
    e.preventDefault();
    if (!answer) {
      window.alert('input answer!');
    } else {
      if (!resultPhase) {
        dispatch(scoreCount(answer === correctAnswer));
        dispatch(resultReducer(answer === correctAnswer));
        dispatch(resultPhaseReducer(true));
        let newVerb = await getVerb();
        if (newVerb === loadTaskWord) {
          newVerb = await getVerb();
        }
        setLoadTaskWord(newVerb);
      } else {
        dispatch(taskWordReducer(loadTaskWord));
        setAnswer('');
        dispatch(resultPhaseReducer(false));
      }
    }
  };

  return (
    <form className='inputForm' onSubmit={(e) => onInputSubmit(e)}>
      <input
        type='text'
        style={{
          backgroundColor: resultPhase
            ? result
              ? '#00FF00'
              : '#ED4337'
            : '#FFF',
        }}
        id='answer-input'
        ref={inputRef}
        className='answerInput'
        onChange={(e) => onInputChange(e)}
        value={answer}
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
