import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'taskSlice',
  initialState: {
    correctAnswer: '',
    resultPhase: false,
    result: '',
    taskWord: '',
    taskForm: '',
  },
  reducers: {
    correctAnswerReducer: (state, action) => {
      state.correctAnswer = action.payload;
    },
    resultPhaseReducer: (state, action) => {
      state.resultPhase = action.payload;
    },
    resultReducer: (state, action) => {
      state.result = action.payload;
    },
    taskWordReducer: (state, action) => {
      state.taskWord = action.payload;
    },
    taskFormReducer: (state, action) => {
      state.taskForm = action.payload;
    },
  },
});

export const {
  correctAnswerReducer,
  resultPhaseReducer,
  resultReducer,
  taskWordReducer,
  taskFormReducer,
} = taskSlice.actions;

export default taskSlice.reducer;
