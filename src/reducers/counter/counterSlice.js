import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      console.log('hello')
      state.value++
    },
    decremented: (state) => {
      state.value--
    },
    incrementByAmount: (state, action) => {
      console.log(action)
      state.value += action.payload.value
    }
  },
});

export const { incremented, decremented, incrementByAmount } = counterSlice.actions;

console.log(counterSlice)

export default counterSlice.reducer