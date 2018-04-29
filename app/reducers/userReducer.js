import { USER } from '../actions/actionConstants';

const initialState = {
  id: null,
  token: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER.SET: {
      return {
        id: action.token.userId,
        token: action.token
      };
    }
    case USER.UNSET: {
      return {
        id: null,
        token: null
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
