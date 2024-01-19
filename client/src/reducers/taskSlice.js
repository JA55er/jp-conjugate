import { createSlice } from '@reduxjs/toolkit';

//
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
    //reducer for the correct answer that the user needs to input
    correctAnswerReducer: (state, action) => {
      state.correctAnswer = action.payload;
    },
    //reducer for setting the result phase either true or false
    //if true - shows whether user's answer is correct or not
    //if false - shows the input and waits for user to put in the answer
    resultPhaseReducer: (state, action) => {
      state.resultPhase = action.payload;
    },
    //reducer for checking wheter user's answer is correct or not
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
