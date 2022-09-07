import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './reducers/taskSlice';
import counterReducer from './reducers/counter/counterSlice';
import optionsReducer from './reducers/optionsSlice'
import scoreSlice from './reducers/scoreSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    options: optionsReducer,
    score: scoreSlice,
    answer: taskSlice
  },
});

export default store