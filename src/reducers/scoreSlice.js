import { createSlice } from '@reduxjs/toolkit';

export const scoreSlice = createSlice({
  name: 'score',
  initialState: {
    correctAnswers: 0,
    incorrectAnswers: 0,
    answerRatio: 0,
  },
  reducers: {
    scoreCount: (state, action) => {
      if (action.payload) {
        state.correctAnswers++
      } else {
        state.incorrectAnswers++
      }
      state.answerRatio = Math.round((state.correctAnswers / (state.correctAnswers + state.incorrectAnswers)) * 100);
    }
  },
});

export const {scoreCount} = scoreSlice.actions;

export default scoreSlice.reducer;
