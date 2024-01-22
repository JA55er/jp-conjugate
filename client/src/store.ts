import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './reducers/taskSlice';
import optionsReducer from './reducers/optionsSlice';
import scoreReducer from './reducers/scoreSlice';


export const store = configureStore({
  reducer: {
    options: optionsReducer,
    score: scoreReducer,
    answer: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
