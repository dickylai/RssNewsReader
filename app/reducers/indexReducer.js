import { combineReducers } from 'redux';
import user from './userReducer';
import signUp from './signUpReducer';
import formReducer from './formReducer';

const indexReducer = combineReducers({
  user,
  signUp,
  form: formReducer
});

export default indexReducer;
