import { SIGNUP } from './actionConstants'

export function signUpRequest({ email, password, confirmPassword }) {
  return {
    type: SIGNUP.REQUESTING,
    email,
    password,
    confirmPassword
  };
};
