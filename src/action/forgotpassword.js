import { createAction } from 'redux-actions';
export const forgotPasswordActionType = {
  FORGOTPASSWORD_REQUEST: "FORGOTPASSWORD_REQUEST",
  FORGOTPASSWORD_SUCCESS: "FORGOTPASSWORD_SUCCESS",
  FORGOTPASSWORD_FAILURE: "FORGOTPASSWORD_FAILURE",
}
export const forgotPasswordReq = createAction(forgotPasswordActionType.FORGOTPASSWORD_REQUEST)
export const forgotPasswordSuccess = createAction(forgotPasswordActionType.FORGOTPASSWORD_SUCCESS)
export const forgotPasswordFailure = createAction(forgotPasswordActionType.FORGOTPASSWORD_FAILURE)