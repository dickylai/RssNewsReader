import SignUpSaga from './signUpSaga';
import LoginSaga from './loginSaga';

export default function* indexSaga () {
  yield [
    SignUpSaga(),
    LoginSaga()
  ];
};
