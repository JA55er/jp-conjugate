import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { incremented, decremented, incrementByAmount } from '../reducers/counter/counterSlice';
import { optionsActions } from '../reducers/optionsSlice';

const Header = ({ name }) => {
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

  // const po = 'polite'

  // useEffect(() => {
  //   // console.log(count);
  // }, [count]);

  return (
    <div className='headerContainer'>
      <div className='header'>{name}</div>
      {/* <div>{count}</div> */}
      {/* <button
        onClick={() => {
          dispatch(optionsActions[po]());
          console.log('clicked');
        }}
      >
        Increment!
      </button>
      <button onClick={() => dispatch(optionsActions.negative())}>Decrement!</button>
      <button onClick={() => dispatch(incrementByAmount({value: 5, something: 'hello'}))}>+ 5!</button> */}
    </div>
  );
};

export default Header;
