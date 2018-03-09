import SignUpSaga from './signUpSaga';

export default function* indexSaga () {
  yield [
    SignUpSaga()
  ];
};
