import { Dispatch } from 'redux';
import { ActionType } from './../action-types';
import { Action } from './../actions';

export const getListUsers = (results: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const req: Response = await fetch(
        `${process.env.REACT_APP_API_URL}/?results=${results}`
      );
      const res = await req.json();
      dispatch({
        type: ActionType.GET_LIST_USERS_SUCCESS,
        payload: res.results,
      });
    } catch (err) {
      dispatch({
        type: ActionType.GET_LIST_USERS_ERROR,
        payload: err.message,
      });
    }
  };
};
