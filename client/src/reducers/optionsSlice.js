import { createSlice } from '@reduxjs/toolkit';

//slice for all the options available to choose for conjugation forms
export const optionsSlice = createSlice({
  name: 'options',
  initialState: {
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
  },
  reducers: {
    //changes a specific option to either true of false
    setting: (state, action) => {
      state[action.payload.option] = action.payload.value;
    },
  },
});

export const optionsActions = optionsSlice.actions;

export default optionsSlice.reducer;
