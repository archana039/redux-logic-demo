import { createAction } from 'redux-actions';
export const LoginActionType = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
}
export const loginReq = createAction(LoginActionType.LOGIN_REQUEST)
export const loginSuccess = createAction(LoginActionType.LOGIN_SUCCESS)
export const loginFailure = createAction(LoginActionType.LOGIN_FAILURE)
