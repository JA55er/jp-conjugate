import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { taskFormReducer, correctAnswerReducer } from '../reducers/taskSlice';
import getCorrectAnswer from '../util/getCorrectAnswer';

const FormTask = () => {
  const dispatch = useDispatch();

  const [options, taskWord, taskForm] = useSelector((state) => {
    return [state.options, state.answer.taskWord, state.answer.taskForm];
  });

  useEffect(() => {
    if (taskWord) {
      changeForm();
    }
  }, [taskWord, options]); // eslint-disable-line

  const changeForm = () => {
    // console.log(taskWord)
    const { form, name } = getCorrectAnswer(options, taskWord);
    
    dispatch(taskFormReducer(name));
    dispatch(correctAnswerReducer(form));
    console.log(form)
  };

  return <div className='task'>Conjugate to {taskForm} form</div>;
};

export default FormTask;
