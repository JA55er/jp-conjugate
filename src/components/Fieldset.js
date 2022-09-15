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
        <Setting
          settingName={'て'}
          settingTitle={'て Form'}
        />
        <Setting
          settingName={'negative'}
          settingTitle={'Negative Form'}
        />
        <Setting
          settingName={'passive'}
          settingTitle={'Passive Form'}
        />
        <Setting
          settingName={'causative'}
          settingTitle={'Causative Form'}
        />
        <Setting
          settingName={'desire'}
          settingTitle={'Desire Form'}
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
