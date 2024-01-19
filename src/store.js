import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './reducers/taskSlice';
import optionsReducer from './reducers/optionsSlice';
import scoreReducer from './reducers/scoreSlice';

const store = configureStore({
  reducer: {
    options: optionsReducer,
    score: scoreReducer,
    answer: taskReducer,
  },
});

export default store;
