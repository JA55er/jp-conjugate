import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ScoreState {
  correctAnswers: number;
  incorrectAnswers: number;
  answerRatio: number;
}

const initialState: ScoreState = {
  correctAnswers: 0,
  incorrectAnswers: 0,
  answerRatio: 0,
};

//a slice for user score
export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    //changes either correct or incorrect answer score and calculates ratio
    scoreCount: (state, action: PayloadAction<boolean>) => {
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
