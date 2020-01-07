import { createAction } from 'redux-actions';
export const blogTypeActionType = {
  BLOGTYPE_REQUEST: "FORGOTPASSWORD_REQUEST",
  BLOGTYPE_SUCCESS: "FORGOTPASSWORD_SUCCESS",
  BLOGTYPE_FAILURE: "FORGOTPASSWORD_FAILURE",
}
export const blogTypeReq = createAction(blogTypeActionType.BLOGTYPE_REQUEST)
export const blogTypeSuccess = createAction(blogTypeActionType.BLOGTYPE_SUCCESS)
export const blogTypeFailure = createAction(blogTypeActionType.BLOGTYPE_FAILURE)