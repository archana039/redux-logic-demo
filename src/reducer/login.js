import { LoginActionType } from "../action/login";
import { handleActions } from 'redux-actions';
const LoginReducer = handleActions(
  {
    [LoginActionType.LOGIN_REQUEST]: (state, action) => ({
      ...state,
      isLoading: true,
    }),
    [LoginActionType.LOGIN_SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      isLoggedIn: true
    }),
    [LoginActionType.LOGIN_FAILURE]: (state, action) => ({
      ...state,
      isLoading: false
    })
  }, { isLoading: true }

)
export default LoginReducer