import { combineReducers } from 'redux';
import user from './userReducer';
import signUp from './signUpReducer';
import login from './loginReducer';
import formReducer from './formReducer';

const indexReducer = combineReducers({
  user,
  signUp,
  login,
  form: formReducer
});

export default indexReducer;
