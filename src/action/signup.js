import { createAction } from 'redux-actions';
export const SignupActionType = {
  SIGNUP_REQUEST: 'SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_FAILURE: 'SIGNUP_FAILURE',
}
export const loginReq = createAction(LoginActionType.LOGIN_REQUEST)
export const loginSuccess = createAction(LoginActionType.LOGIN_SUCCESS)
export const loginFailure = createAction(LoginActionType.LOGIN_FAILURE)
