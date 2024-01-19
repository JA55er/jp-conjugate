import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { taskFormReducer, correctAnswerReducer } from '../reducers/taskSlice';
import getCorrectAnswer from '../util/getCorrectAnswer';

// form to which the user has to conjugate
const FormTask = () => {
  const dispatch = useDispatch();

  const [options, taskWord, taskForm] = useSelector((state) => {
    return [state.options, state.answer.taskWord, state.answer.taskForm];
  });

  const changeForm = () => {
    //get the correct answer that the user has to input based on task word and options

    const { form, correctAnswerWord } = getCorrectAnswer(options, taskWord);

    //set the form to which the user has to conjugate to
    dispatch(taskFormReducer(form));
    //set the correct answer that the user has to input
    dispatch(correctAnswerReducer(correctAnswerWord));
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
