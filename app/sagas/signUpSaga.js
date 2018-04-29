import { call, put, takeLatest } from 'redux-saga/effects'
import { SIGNUP } from '../actions/actionConstants'

function signUpApi (email, password, confirmPassword) {
  // move to backend api call
  // mock logic
  if (!email || !password || !confirmPassword) throw new Error("invalid input.");
  if (password !== confirmPassword) throw new Error("password not match.");
  return {
    email: email,
    id: 1
  };
}

function* signUpFlow ({ email, password, confirmPassword }) {
  try {
    const response = yield call(signUpApi, email, password, confirmPassword);
    yield put({ type: SIGNUP.SUCCESS, response });
  } catch (error) {
    yield put({ type: SIGNUP.ERROR, error });
  }
}

function* signUpWatcher () {
  yield takeLatest(SIGNUP.REQUESTING, signUpFlow);
}

export default signUpWatcher;
