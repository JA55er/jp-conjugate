import { createSlice } from '@reduxjs/toolkit';

export const optionsSlice = createSlice({
  name: 'options',
  initialState: {
    past: false,
    polite: false,
    negative: false,
  },
  reducers: {
    setting: (state, action) => {
      state[action.payload.option] = action.payload.value
    }
  },
});

export const optionsActions = optionsSlice.actions;

export default optionsSlice.reducer;
