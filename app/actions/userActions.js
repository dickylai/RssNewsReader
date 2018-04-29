import { USER } from './actionConstants';

export function setUser(token) {
  return {
    type: USER.SET,
    token
  };
};

export function unsetUser() {
  return {
    type: USER.UNSET
  };
};
