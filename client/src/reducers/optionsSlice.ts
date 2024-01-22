import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface OptionsState {
  past: boolean;
  polite: boolean;
  negative: boolean;
  causative: boolean;
  passive: boolean;
  desire: boolean;
  て: boolean;
  conditional: boolean;
  volitional: boolean;
  potential: boolean;
}

const initialState: OptionsState = {
  past: false,
  polite: false,
  negative: false,
  causative: false,
  passive: false,
  desire: false,
  て: false,
  conditional: false,
  volitional: false,
  potential: false,
};

interface SettingPayload {
  option: keyof OptionsState;
  value: boolean;
}

//slice for all the options available to choose for conjugation forms
export const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    //changes a specific option to either true of false
    setting: (state, action: PayloadAction<SettingPayload>) => {
      state[action.payload.option] = action.payload.value;
    },
  },
});

export const optionsActions = optionsSlice.actions;

export default optionsSlice.reducer;
