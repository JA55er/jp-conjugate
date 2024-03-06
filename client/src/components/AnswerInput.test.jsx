import { render, screen, fireEvent } from '@testing-library/react';
import { expect, describe, it } from 'vitest';

import AnswerInput from './AnswerInput';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('AnswerInput', () => {
  it('render the AnswerInput component', () => {
    render(
      <Provider store={store}>
        <AnswerInput />
      </Provider>
    );
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeDefined();
  });
  it('converts to kana correctly', () => {
    render(
      <Provider store={store}>
        <AnswerInput />
      </Provider>
    );
    const inputElement = screen.getByLabelText('answer');
    fireEvent.change(inputElement, { target: { value: 'konnnichiha' } });
    expect(inputElement.value).toBe('こんにちは');
    screen.debug();
  });
});
