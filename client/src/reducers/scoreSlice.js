import { createSlice } from '@reduxjs/toolkit';

//a slice for user score
export const scoreSlice = createSlice({
  name: 'score',
  initialState: {
    correctAnswers: 0,
    incorrectAnswers: 0,
    answerRatio: 0,
  },
  reducers: {
    //changes either correct or incorrect answer score and calculates ratio
    scoreCount: (state, action) => {
      if (action.payload) {
        state.correctAnswers++;
      } else {
        state.incorrectAnswers++;
      }
      state.answerRatio = Math.round(
        (state.correctAnswers /
          (state.correctAnswers + state.incorrectAnswers)) *
          100
      );
    },
  },
});

export const { scoreCount } = scoreSlice.actions;

export default scoreSlice.reducer;
