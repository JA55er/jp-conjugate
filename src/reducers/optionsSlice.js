import { createSlice } from '@reduxjs/toolkit';

export const optionsSlice = createSlice({
  name: 'options',
  initialState: {
    polite: false,
    negative: false,
    past: false
  },
  reducers: {
    polite: (state) => {
      state.polite = !state.polite
    },
    negative: (state) => {
      state.negative = !state.negative 
    },
    past: (state) => {
      state.past = !state.past
    }
  },
});

export const optionsActions = optionsSlice.actions;

export default optionsSlice.reducer;

