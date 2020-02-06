import { createAction } from 'redux-actions';
export const linkVerificationActionType = {
  LINKVERIFICATION_REQUEST: "LINKVERIFICATION_REQUEST",
  LINKVERIFICATION_SUCCESS: "LINKVERIFICATION_SUCCESS",
  LINKVERIFICATION_FAILURE: "LINKVERIFICATION_FAILURE",
}
export const linkVerificationReq = createAction(linkVerificationActionType.LINKVERIFICATION_REQUEST)
export const linkVerificationSuccess = createAction(linkVerificationActionType.LINKVERIFICATION_SUCCESS)
export const linkVerificationFailure = createAction(linkVerificationActionType.LINKVERIFICATION_FAILURE)