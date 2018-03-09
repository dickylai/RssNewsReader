import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import 'regenerator-runtime/runtime';

import indexReducer from './reducers/indexReducer';
import indexSagas from './sagas/indexSaga';

import SignUpPanel from './components/user/SignUpPanel';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  indexReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(indexSagas);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact={true} path="/" component={App} />
        <Route path="/signup" component={SignUpPanel} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
