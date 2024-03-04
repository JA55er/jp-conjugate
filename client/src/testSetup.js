import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store'; // Import your store here

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

// export const renderWithRedux = (
//   ui,
//   { initialState, customStore = store } = {}
// ) => {
//   return {
//     ...render(<Provider store={customStore}>{ui}</Provider>),
//     store: customStore,
//   };
// };
