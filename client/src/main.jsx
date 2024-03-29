import { createRoot } from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './store';

const container = document.getElementById('root');

const root = createRoot(container);

// store.subscribe(() => console.log(store.getState()))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
