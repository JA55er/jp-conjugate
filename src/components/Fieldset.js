import React, { useState, useEffect } from 'react';
import Setting from './Setting';

const Fieldset = ({ setOptions }) => {
  const [polite, setPolite] = useState(false);
  const [past, setPast] = useState(false);
  const [te, setTe] = useState(false);
  const [negative, setNegative] = useState(false);

  useEffect(() => {
    if (past == false && polite == false &&  negative == false) {
      setOptions({ past: true, polite: true, negative: true });
    } else {
      setOptions({ past, polite, negative });
    }
  }, [polite, past, negative]);

  return (
    <fieldset className='fieldset'>
      <legend className='fieldsetLegend'>Settings</legend>
      <ul>
        <Setting
          settingName={'polite'}
          settingTitle={'Polite Form'}
          setSetting={setPolite}
        />
        <Setting
          settingName={'past'}
          settingTitle={'Past Form'}
          setSetting={setPast}
        />
        {/* <Setting
          settingName={'te'}
          settingTitle={'て Form'}
          setSetting={setTe}
        /> */}
        <Setting
          settingName={'negative'}
          settingTitle={'Negative Form'}
          setSetting={setNegative}
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
