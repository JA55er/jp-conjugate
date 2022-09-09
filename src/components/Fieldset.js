import React from 'react';
import Setting from './Setting';

const Fieldset = () => {

  return (
    <fieldset className='fieldset'>
      <legend className='fieldsetLegend'>Settings</legend>
      <ul>
        <Setting
          settingName={'polite'}
          settingTitle={'Polite Form'}
        />
        <Setting
          settingName={'past'}
          settingTitle={'Past Form'}
        />
        {/* <Setting
          settingName={'te'}
          settingTitle={'て Form'}
          setSetting={setTe}
        /> */}
        <Setting
          settingName={'negative'}
          settingTitle={'Negative Form'}
        />
        {/* <Setting
          settingName={'PotentialForm'}
          settingTitle={'Potential Form'}
        />
        <Setting
          settingName={'ConditionalForm'}
          settingTitle={'Conditional Form'}
        />
        <Setting
          settingName={'VolitionalForm'}
          settingTitle={'Volitional Form'}
        /> */}
      </ul>
    </fieldset>
  );
};
export default Fieldset;
