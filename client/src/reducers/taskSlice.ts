import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface TaskState {
  correctAnswer: string;
  resultPhase: boolean;
  result: boolean;
  taskWord: object;
  taskForm: string;
}

const initialState: TaskState = {
  correctAnswer: '',
  resultPhase: false,
  result: false,
  taskWord: {},
  taskForm: '',
};

export interface TaskWordActionPayload {
  _id: string;
  japanese: string;
  hiraganaReading: string;
  romanization: string;
  englishTranslation: string;
  verbClass: number;
  transitiveIntransitive: string;
}

//slice containing the data for the whole task of conjugating to the right answer
export const taskSlice = createSlice({
  name: 'taskSlice',
  initialState,
  reducers: {
    //reducer for the correct answer that the user needs to input
    correctAnswerReducer: (state, action: PayloadAction<string>) => {
      state.correctAnswer = action.payload;
    },
    //reducer for setting the result phase either true or false
    //if true - shows whether user's answer is correct or not
    //if false - shows the input and waits for user to put in the answer
    resultPhaseReducer: (state, action:PayloadAction<boolean>) => {
      state.resultPhase = action.payload;
    },
    //reducer for checking wheter user's answer is correct or not
    resultReducer: (state, action:PayloadAction<boolean>) => {
      state.result = action.payload;
    },

    //the word that needs to be conjugated
    taskWordReducer: (state, action: PayloadAction<TaskWordActionPayload>) => {
      state.taskWord = action.payload;
    },

    //the form to which the user needs to conjugate task word
    taskFormReducer: (state, action: PayloadAction<string>) => {
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
