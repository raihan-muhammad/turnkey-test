import { ActionType } from './../action-types';

interface GetListUsersSuccess {
  type: ActionType.GET_LIST_USERS_SUCCESS;
  payload: string[];
}

interface GetListUsersError {
  type: ActionType.GET_LIST_USERS_ERROR;
  payload: string;
}

export type Action = GetListUsersError | GetListUsersSuccess;
