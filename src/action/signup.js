import { createAction } from 'redux-actions';
export const SignupActionType = {
  SIGNUP_REQUEST: 'SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_FAILURE: 'SIGNUP_FAILURE',
}
export const signUpReq = createAction(SignupActionType.SIGNUP_REQUEST)
export const signUpSuccess = createAction(SignupActionType.SIGNUP_SUCCESS)
export const signUpFailure = createAction(SignupActionType.SIGNUP_FAILURE)
