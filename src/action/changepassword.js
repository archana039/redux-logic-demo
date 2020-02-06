import { createAction } from 'redux-actions';
export const changepasswordActionType = {
  CHANGEPASSWORD_REQUEST: "CHANGEPASSWORD_REQUEST",
  CHANGEPASSWORD_SUCCESS: "CHANGEPASSWORD_SUCCESS",
  CHANGEPASSWORD_FAILURE: "CHANGEPASSWORD_FAILURE",
}
export const changePasswordReq = createAction(changepasswordActionType.CHANGEPASSWORD_REQUEST)
export const changePasswordSuccess = createAction(changepasswordActionType.CHANGEPASSWORD_SUCCESS)
export const changePasswordFailure = createAction(changepasswordActionType.CHANGEPASSWORD_FAILURE)