import { createSlice } from '@reduxjs/toolkit';

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
    setting: (state, action) => {
      state[action.payload.option] = action.payload.value;
    },
  },
});

export const optionsActions = optionsSlice.actions;

export default optionsSlice.reducer;
