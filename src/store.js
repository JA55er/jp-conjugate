import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './reducers/taskSlice';
import optionsReducer from './reducers/optionsSlice';
import scoreSlice from './reducers/scoreSlice';

const store = configureStore({
  reducer: {
    options: optionsReducer,
    score: scoreSlice,
    answer: taskSlice,
  },
});

export default store;
