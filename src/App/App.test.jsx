import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-testing-library';

import App from './';

const mockStore = configureStore();

describe('<App />', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore({
      user: {
        data: {},
      },
    });

    wrapper = undefined;
  });

  const app = () => {
    if (!wrapper) {
      wrapper = render(
        <Provider store={store}>
          <App />
        </Provider>,
      );
    }
    return wrapper;
  };

  it('renders', () => {
    expect(app().firstChild).toMatchSnapshot();
  });
});
