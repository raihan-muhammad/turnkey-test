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
        hasLoadMore: true,
        pages: 1,
      });
    } catch (err) {
      dispatch({
        type: ActionType.GET_LIST_USERS_ERROR,
        payload: err.message,
      });
    }
  };
};

export const getMoreListUsers = (
  results: string,
  page: number,
  oldListUsers: any
) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      let newListUsers = [];
      const req: Response = await fetch(
        `${process.env.REACT_APP_API_URL}/?results=${results}&page=${page}`
      );
      const res = await req.json();
      newListUsers = oldListUsers.concat(res.results);
      dispatch({
        type: ActionType.GET_LIST_USERS_SUCCESS,
        payload: newListUsers,
        hasLoadMore: true,
        pages: page + 1,
      });
    } catch (err) {
      dispatch({
        type: ActionType.GET_LIST_USERS_ERROR,
        payload: err.message,
      });
    }
  };
};
