import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { optionsActions } from '../reducers/optionsSlice';
import Setting from './Setting';

const Fieldset = ({ setOptions }) => {

  // const dispatch = useDispatch();
  // const options = useSelector(state => state.options)

  // const [polite, setPolite] = useState(false);
  // const [past, setPast] = useState(false);
  // const [te, setTe] = useState(false);
  // const [negative, setNegative] = useState(false);



  // useEffect(() => {

    // if (Object.values(options).every(value => !value)) {
    //   dispatch(optionsActions.allTrue());
    // } else {
      // setOptions({ past, polite, negative });
    // }
  // }, [options]);
  // useEffect(() => {
  //   if (past == false && polite == false &&  negative == false) {
  //     setOptions({ past: true, polite: true, negative: true });
  //   } else {
  //     setOptions({ past, polite, negative });
  //   }
  // }, [polite, past, negative]);

  return (
    <fieldset className='fieldset'>
      <legend className='fieldsetLegend'>Settings</legend>
      <ul>
        <Setting
          settingName={'polite'}
          settingTitle={'Polite Form'}
          // setSetting={setPolite}
        />
        <Setting
          settingName={'past'}
          settingTitle={'Past Form'}
          // setSetting={setPast}
        />
        {/* <Setting
          settingName={'te'}
          settingTitle={'て Form'}
          setSetting={setTe}
        /> */}
        <Setting
          settingName={'negative'}
          settingTitle={'Negative Form'}
          // setSetting={setNegative}
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
