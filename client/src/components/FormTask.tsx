import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import {
  taskFormReducer,
  correctAnswerReducer,
  TaskWordActionPayload,
} from '../reducers/taskSlice';
import getCorrectAnswer from '../util/getCorrectAnswer';
import { useAppDispatch, useAppSelector } from '../hooks';
import { OptionsState } from '../reducers/optionsSlice';

// form to which the user has to conjugate
const FormTask = () => {
  const dispatch = useAppDispatch();
  // const dispatch = useDispatch();

  const [options, taskWord, taskForm]: [
    OptionsState,
    TaskWordActionPayload,
    React.ReactNode
  ] = useAppSelector((state) => {
    return [
      state.options,
      state.answer.taskWord as TaskWordActionPayload,
      state.answer.taskForm,
    ];
  });
  // const [options, taskWord, taskForm] = useSelector((state) => {
  //   return [state.options, state.answer.taskWord, state.answer.taskForm];
  // });

  // console.log('taskword: ', taskWord);

  const changeForm = () => {
    //get the correct answer that the user has to input based on task word and options

    const { form, correctAnswerWord } = getCorrectAnswer(options, taskWord);

    //set the form to which the user has to conjugate to
    dispatch(taskFormReducer(form || ''));
    // console.log('form: ', form);
    //set the correct answer that the user has to input
    // console.log('correct answer word: ', correctAnswerWord);
    if (correctAnswerWord) {
      console.log(correctAnswerWord);
      
      dispatch(correctAnswerReducer(correctAnswerWord));
    }
    // console.log('taskFormReducer: ', form);
    // console.log('correctAnswerReducer: ', correctAnswerWord);
  };

  // change the form to which the user has to conjugate when the word changes or when user changes settings
  useEffect(() => {
    if (taskWord) {
      changeForm();
    }
  }, [taskWord, options]); // eslint-disable-line

  return <div className='task'>Conjugate to {taskForm} form</div>;
};

export default FormTask;
