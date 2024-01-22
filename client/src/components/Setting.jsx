import React from 'react';
import { useDispatch } from 'react-redux';
import { optionsActions } from '../reducers/optionsSlice';

//setting for changing possible task word conjugation forms
const Setting = ({ settingName, settingTitle }) => {
  console.log(settingName, settingTitle);
  const dispatch = useDispatch();

  return (
    <li>
      <h4>{settingTitle}</h4>
      <label className='setting' htmlFor={settingName}>
        <input
          className='settingCheckbox'
          type={'checkbox'}
          id={`${settingName}`}
          onChange={(e) => {
            dispatch(
              optionsActions.setting({
                option: settingName,
                value: e.target.checked,
              })
            );
          }}
        />
        <div className='settingView'></div>
        <div className='slider'></div>
      </label>
    </li>
  );
};

export default Setting;
