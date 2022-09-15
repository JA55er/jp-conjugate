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
    te: false
  },
  reducers: {
    setting: (state, action) => {
      state[action.payload.option] = action.payload.value
    }
  },
});

export const optionsActions = optionsSlice.actions;

export default optionsSlice.reducer;
