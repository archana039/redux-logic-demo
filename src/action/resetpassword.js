import { createAction } from 'redux-actions';
export const resetpasswordActionType = {
  RESETPASSWORD_REQUEST: "RESETPASSWORD_REQUEST",
  RESETPASSWORD_SUCCESS: "RESETPASSWORD_SUCCESS",
  RESETPASSWORD_FAILURE: "RESETPASSWORD_FAILURE",
}
export const resetPasswordReq = createAction(resetpasswordActionType.RESETPASSWORD_REQUEST)
export const resetPasswordSuccess = createAction(resetpasswordActionType.RESETPASSWORD_SUCCESS)
export const resetPasswordFailure = createAction(resetpasswordActionType.RESETPASSWORD_FAILURE)