import React, { useEffect, useRef, useState } from 'react';
import getVerb from '../api/getVerb';

import * as wanakana from 'wanakana';
import { useDispatch, useSelector } from 'react-redux';
import { resultPhaseReducer, taskWordReducer } from '../reducers/taskSlice';

const AnswerInput = ({ setTaskWord, setUserAnswer, result }) => {
  const dispatch = useDispatch();
  const resultPhase = useSelector((state) => state.answer.resultPhase);

  const [answer, setAnswer] = useState('');

  const [loadTaskWord, setLoadTaskWord] = useState({});

  const inputRef = useRef(null);

  // useEffect(() => {
  //   var input = document.getElementById('answer-input');
  //   wanakana.bind(input);
  // }, []);

  useEffect(() => {
    const wana = wanakana.toKana(answer);
    console.log(wana)
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
    console.log(e.target);
    setAnswer(e.target.value);
    console.log(answer);
  };
  // const onInputSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(e.target);
  // };
  const onInputSubmit = async (e) => {
    // const a = e.target.value
    // console.log(e.target)
    // console.log(a)
    console.log(answer)
    e.preventDefault();
    if (!answer) {
      window.alert('input answer!');
    } else {
      if (!resultPhase) {
        setUserAnswer(answer);
        console.log(answer)
        dispatch(resultPhaseReducer(true));
        let newVerb = await getVerb();
        if (newVerb == loadTaskWord) {
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
        type="text"
        style={{ backgroundColor: result }}
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
