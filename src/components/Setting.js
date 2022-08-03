import React from 'react';

const Setting = ({ settingName, setSetting, settingTitle }) => {
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
          onChange={(e) => onSettingChange(e)}
        />
        <div className='settingView'></div>
        <div className='slider'></div>
      </label>
    </li>
  );
};

export default Setting;
