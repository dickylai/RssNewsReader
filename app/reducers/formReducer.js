import { reducer as form } from 'redux-form';
import { LOGIN, SIGNUP } from '../actions/actionConstants';

const formReducer = form.plugin({
  signUpForm: (state, action) => {
    switch(action.type) {
      case SIGNUP.SUCCESS: {
        return {
          ...state,
            values: {
              ...state.values,
              email: undefined,
              password: undefined,
              confirmPassword: undefined
            },
            fields: {
              ...state.fields,
              email: undefined,
              password: undefined,
              confirmPassword: undefined
            }
        };
      }
      case SIGNUP.ERROR: {
        return {
          ...state,
            values: {
              ...state.values,
              password: undefined,
              confirmPassword: undefined
            },
            fields: {
              ...state.fields,
              password: undefined,
              confirmPassword: undefined
            }
        };
      }
      case LOGIN.ERROR: {
        return {
          ...state,
            values: {
              ...state.values,
              password: undefined,
            },
            fields: {
              ...state.fields,
              password: undefined,
            }
        };
      }
      default: {
        return state;
      }
    }
  }
});

export default formReducer;
