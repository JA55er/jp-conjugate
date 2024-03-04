import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { test, expect } from 'vitest';

import AnswerInput from './AnswerInput';
// import * as wanakana from 'wanakana';

// import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { store } from '../store';

const sum = (a, b) => {
  return a + b;
};

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

describe('AnswerInput', async () => {
  // const mockStore = configureStore();
  // let store;
  it('render the AnswerInput component', () => {
    // store = mockStore();
    const { container } = render(
      <Provider store={store}>
        <AnswerInput />
      </Provider>
    );
    const inputElement = screen.getByLabelText('answer');
    fireEvent.change(inputElement, { target: { value: 'konnnichiha' } });
    // console.log(inputElement);
    expect(inputElement.value).toBe('こんにちは');
    screen.debug();
  });
});
