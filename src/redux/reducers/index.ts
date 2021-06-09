import { combineReducers } from 'redux';
import GetListUsersReducer from './usersReducer';

const reducers = combineReducers({
  listUsers: GetListUsersReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
