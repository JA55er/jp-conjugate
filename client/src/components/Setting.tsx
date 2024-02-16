import React from 'react';
// import { useDispatch } from 'react-redux';
import { OptionsState, optionsActions } from '../reducers/optionsSlice';
import { useAppDispatch } from '../hooks';

export interface SettingProps {
  settingName: keyof OptionsState;
  settingTitle: string;
}

//setting for changing possible task word conjugation forms
const Setting = ({ settingName, settingTitle }: SettingProps) => {
  // console.log(
  //   'settingname: ',
  //   settingName,
  //   typeof settingName,
  //   'setting title: ',
  //   settingTitle
  // );
  const dispatch = useAppDispatch();
  // const dispatch = useDispatch();

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
