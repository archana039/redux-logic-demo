import { createAction } from 'redux-actions';
export const usersActionType = {
  USERSLIST_REQUEST: "USERSLIST_REQUEST",
  USERSLIST_SUCCESS: "USERSLIST_SUCCESS",
  USERSLIST_FAILURE: " USERSLIST_FAILURE",
}
export const usersListReq = createAction(usersActionType.USERSLIST_REQUEST)
export const usersListSuccess = createAction(usersActionType.USERSLIST_SUCCESS)
export const usersListFailure = createAction(usersActionType.USERSLIST_FAILURE)