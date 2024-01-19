import React from 'react';
import Setting from './Setting';

//list of conjugation options that the user can select
const Fieldset = () => {
  return (
    <fieldset className='fieldset'>
      <legend className='fieldsetLegend'>Settings</legend>
      <ul>
        <Setting settingName={'polite'} settingTitle={'Polite Form'} />
        <Setting settingName={'past'} settingTitle={'Past Form'} />
        <Setting settingName={'て'} settingTitle={'て Form'} />
        <Setting settingName={'negative'} settingTitle={'Negative Form'} />
        <Setting settingName={'passive'} settingTitle={'Passive Form'} />
        <Setting settingName={'causative'} settingTitle={'Causative Form'} />
        <Setting settingName={'desire'} settingTitle={'Desire Form'} />
        <Setting settingName={'potential'} settingTitle={'Potential Form'} />
        <Setting settingName={'conditional'} settingTitle={'Conditional Form'} />
        <Setting settingName={'volitional'} settingTitle={'Volitional Form'} />
      </ul>
    </fieldset>
  );
};
export default Fieldset;
