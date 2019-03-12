import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receivePolls } from './polls';
import { setAuthedUser } from './authedUser';

const AUTHED_ID = 'dan_abramov';

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, polls }) => {
      dispatch(receivePolls(polls));
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}