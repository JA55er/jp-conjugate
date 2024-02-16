import React from 'react';
import Setting, { SettingProps } from './Setting';

//list of conjugation options that the user can select
const Fieldset = () => {
  const settings: SettingProps[] = [
    { settingName: 'polite', settingTitle: 'Polite Form' },
    { settingName: 'past', settingTitle: 'Past Form' },
    { settingName: 'て', settingTitle: 'て Form' },
    { settingName: 'negative', settingTitle: 'Negative Form' },
    { settingName: 'passive', settingTitle: 'Passive Form' },
    { settingName: 'causative', settingTitle: 'Causative Form' },
    { settingName: 'desire', settingTitle: 'Desire Form' },
    { settingName: 'potential', settingTitle: 'Potential Form' },
    { settingName: 'conditional', settingTitle: 'Conditional Form' },
    { settingName: 'volitional', settingTitle: 'Volitional Form' },
  ];

  return (
    <fieldset className='fieldset'>
      <legend className='fieldsetLegend'>Settings</legend>
      <ul>
        {/* <Setting settingName={'polite'} settingTitle={'Polite Form'} />
        <Setting settingName={'past'} settingTitle={'Past Form'} />
        <Setting settingName={'て'} settingTitle={'て Form'} />
        <Setting settingName={'negative'} settingTitle={'Negative Form'} />
        <Setting settingName={'passive'} settingTitle={'Passive Form'} />
        <Setting settingName={'causative'} settingTitle={'Causative Form'} />
        <Setting settingName={'desire'} settingTitle={'Desire Form'} />
        <Setting settingName={'potential'} settingTitle={'Potential Form'} />
        <Setting
          settingName={'conditional'}
          settingTitle={'Conditional Form'}
        />
        <Setting settingName={'volitional'} settingTitle={'Volitional Form'} /> */}
        {settings.map((setting, index) => (
          <Setting key={index} {...setting} />
        ))}
      </ul>
    </fieldset>
  );
};
export default Fieldset;
