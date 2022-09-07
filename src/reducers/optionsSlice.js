import { createSlice } from '@reduxjs/toolkit';

export const optionsSlice = createSlice({
  name: 'options',
  initialState: {
    past: false,
    polite: false,
    negative: false,
  },
  reducers: {
    // polite: (state) => {
    //   state.polite = !state.polite;
    // },
    // negative: (state) => {
    //   state.negative = !state.negative;
    // },
    // past: (state) => {
    //   state.past = !state.past;
    // },
    // allTrue: (state) => {
    //   Object.keys(state).forEach((key) => (state[key] = true));
    // },
    setting: (state, action) => {
      state[action.payload.option] = action.payload.value
    }
  },
});

export const optionsActions = optionsSlice.actions;

export default optionsSlice.reducer;
