import { ActionType } from './../action-types';
import { Action } from './../actions';

interface ListUserState {
  loading: boolean;
  data: any;
  error: string | null;
  hasLoadMore: boolean;
  pages: number;
}

const initialState = {
  loading: true,
  data: [],
  error: null,
  hasLoadMore: false,
  pages: 1,
};

const GetListUsersReducer = (
  state: ListUserState = initialState,
  action: Action
): ListUserState => {
  switch (action.type) {
    case ActionType.GET_LIST_USERS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null,
        hasLoadMore: action.hasLoadMore,
        pages: action.pages,
      };
    case ActionType.GET_LIST_USERS_ERROR:
      return {
        loading: false,
        data: [],
        error: action.payload,
        hasLoadMore: false,
        pages: 1,
      };
    default:
      return state;
  }
};

export default GetListUsersReducer;
