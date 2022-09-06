import { createSlice } from '@reduxjs/toolkit';

export const scoreSlice = createSlice({
  name: 'score',
  initialState: {
    correctAnswers: 0,
    incorrectAnswers: 0,
    answerRatio: 0,
  },
  reducers: {
    correct: (state) => {
      state.correctAnswers = state.correctAnswers + 1;
    },
    incorrect: (state) => {
      state.incorrectAnswers++;
    },
    ratio: (state) => {
      console.log(state)
      state.answerRatio = Math.round((state.correctAnswers / (state.correctAnswers + state.incorrectAnswers)) * 100);
    },
  },
});

export const {correct, incorrect, ratio} = scoreSlice.actions;

export default scoreSlice.reducer;
