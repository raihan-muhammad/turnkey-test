import { ActionType } from './../action-types';
import { Action } from './../actions';

interface ListUserState {
  loading: boolean;
  data: any;
  error: string | null;
}

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const GetListUsersReducer = (
  state: ListUserState = initialState,
  action: Action
): ListUserState => {
  switch (action.type) {
    case ActionType.GET_LIST_USERS_SUCCESS:
      return { loading: true, data: action.payload, error: null };
    case ActionType.GET_LIST_USERS_ERROR:
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default GetListUsersReducer;
