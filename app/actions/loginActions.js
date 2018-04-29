import { LOGIN } from './actionConstants';

export function loginRequest({ email, password }) {
  return {
    type: LOGIN.REQUESTING,
    email,
    password
  };
};
