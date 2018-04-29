import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Router, Redirect } from 'react-router-dom';
import { Route } from 'react-router';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import 'regenerator-runtime/runtime';

import indexReducer from './reducers/indexReducer';
import indexSagas from './sagas/indexSaga';

import history from './utils/history';
import { checkAuthorization } from './utils/checkAuth';
import AuthCheck from './components/AuthCheck';

import SignUpPage from './components/user/SignUpPage';
import LoginPage from './components/user/LoginPage';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  indexReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(indexSagas);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route
          exact={true} path="/"
          component={App}
        />
        <AuthCheck
          to="/signup" redirectTo="/"
          auth={checkAuthorization(store)}
          toComponent={SignUpPage}
        />
        <AuthCheck
          to="/login" redirectTo="/"
          auth={checkAuthorization(store)}
          toComponent={LoginPage}
        />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'));
