import React, { useEffect, useRef, useState } from 'react';
import getVerb from '../api/getVerb';

import * as wanakana from 'wanakana';
// import { useDispatch, useSelector } from 'react-redux';
import {
  TaskWordActionPayload,
  resultPhaseReducer,
  resultReducer,
  taskWordReducer,
} from '../reducers/taskSlice';
import { scoreCount } from '../reducers/scoreSlice';
import { useAppDispatch, useAppSelector } from '../hooks';
import { RootState } from '../store';

const AnswerInput = () => {
  const dispatch = useAppDispatch();
  // const dispatch = useDispatch();
  const { resultPhase, result, correctAnswer } = useAppSelector(
    (state: RootState) => state.answer
  );
  // const { resultPhase, result, correctAnswer } = useSelector(
  //   (state) => state.answer
  // );

  //user input answer
  const [answer, setAnswer] = useState('');

  //word for conjugation
  const [loadTaskWord, setLoadTaskWord] = useState<TaskWordActionPayload | {}>(
    {}
  );

  // const inputRef = useRef(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  //converts user input to kana
  useEffect(() => {
    // const wana = wanakana.toKana(answer, { IMEMode: true });
    // @ts-ignore
    const wana = wanakana.toKana(answer, { IMEMode: true });
    if (wana !== answer) {
      setAnswer(wana);
    }
  }, [answer]);

  //forces focus on input field on non touch devices
  // const isTouchDevice =
  //   'ontouchstart' in window ||
  //   navigator.maxTouchPoints > 0 ||
  //   navigator.msMaxTouchPoints > 0;
  //   console.log(isTouchDevice);
  const focus = () => {
    // if (!isTouchDevice) {
    if (inputRef.current) {
      setTimeout(() => {
        inputRef.current!.focus();
      }, 100);
    }
    // }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const onInputSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!answer) {
      window.alert('input answer!');
    } else {
      if (!resultPhase) {
        //changes score
        dispatch(scoreCount(answer === correctAnswer));
        //checks if answer is correct
        dispatch(resultReducer(answer === correctAnswer));
        //changes phase to show result
        dispatch(resultPhaseReducer(true));
        //gets new verb and checks if it's not the same as the last
        let newVerb = await getVerb();
        if (newVerb === loadTaskWord) {
          newVerb = await getVerb();
        }
        setLoadTaskWord(newVerb as TaskWordActionPayload);
      } else {
        //changes verb to conjugate. nulls input. changes to input phase
        dispatch(taskWordReducer(loadTaskWord as TaskWordActionPayload));
        console.log('task word: ', loadTaskWord);
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
