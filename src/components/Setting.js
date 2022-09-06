import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { optionsActions } from '../reducers/optionsSlice';

const Setting = ({ settingName, setSetting, settingTitle }) => {
  const dispatch = useDispatch();

  const onSettingChange = (e) => {
    setSetting(e.target.checked);
  };

  return (
    <li>
      <h4>{settingTitle}</h4>
      <label className='setting' htmlFor={settingName}>
        <input
          className='settingCheckbox'
          type={'checkbox'}
          id={`${settingName}`}
          onChange={(e) => {
            onSettingChange(e);
            dispatch(optionsActions[settingName]())
          }}
        />
        <div className='settingView'></div>
        <div className='slider'></div>
      </label>
    </li>
  );
};

export default Setting;
