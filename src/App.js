import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { store, history } from './store';
import AppRouter from './Router';
import { parseError } from './shared/utils/parse_errors';

const authToken = () => {
  const token = localStorage.getItem("firebaseToken");
  return token ? `Bearer ${token}` : null;
};

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <AppRouter />
          </ConnectedRouter>
        </Provider>
    );
  }
}

export default App;
