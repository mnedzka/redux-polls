import authedUser from './authedUser';
import polls from './polls';
import users from './users';
import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
  authedUser,
  polls,
  users,
  loadingBar: loadingBarReducer,
});
