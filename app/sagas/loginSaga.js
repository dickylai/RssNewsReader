import { take, fork, cancel, call, put, cancelled } from 'redux-saga/effects';
import { USER, LOGIN } from '../actions/actionConstants';
import history from '../utils/history';
import { setUser, unsetUser } from '../actions/userActions';

function loginApi(email, password) {
  // move to backend api call
  // mock response
  return {
    id: 1,
    email: email,
    created: new Date()
  };
}

function* loginFlow(email, password) {
  let token;
  try {
    token = yield call(loginApi, email, password);
    yield put(setUser(token));
    yield put({ type: LOGIN.SUCCESS });
    localStorage.setItem('token', JSON.stringify(token));
    yield call(history.push, '/');
  } catch (error) {
    yield put({ type: LOGIN.ERROR, error });
  } finally {
    if (yield cancelled()) {
      yield call(history.push, '/login');
    }
  }
  return token;
}

function* logout() {
  localStorage.removeItem('token');
  yield call(history.push, '/login');
}

function* loginWatcher() {
  yield fork(logoutWatcher);
  while (true) {
    const { email, password } = yield take(LOGIN.REQUESTING);
    const task = yield fork(loginFlow, email, password);

    const action = yield take([USER.UNSET, LOGIN.ERROR]);
    if (action.type === USER.UNSET) {
      yield cancel(task);
    }
    yield call(logout);
  }
}

function* logoutWatcher() {
  yield take(USER.UNSET);
  yield call(logout);
}

export default loginWatcher;
