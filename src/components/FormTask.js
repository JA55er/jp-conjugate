import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { taskFormReducer } from '../reducers/taskSlice';
import randomSetting from '../util/randomSetting';

const FormTask = ({ taskWord, taskForm }) => {

  const dispatch = useDispatch();

  const options = useSelector(state => state.options)

  useEffect(() => {
    changeForm()
  }, [taskWord, options]);

  const changeForm = () => {
    const form = (randomSetting(options))
    dispatch(taskFormReducer(form))
  }

  return <div className='task'>Conjugate to {taskForm} form</div>;
};

export default FormTask;
