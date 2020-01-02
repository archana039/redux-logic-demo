import { LoginActionType } from "../action/login";
import { handleActions } from 'redux-actions';

const initialStates = { isLoading: false, isLoggedIn: false }
const LoginReducer = handleActions(
  {
    [LoginActionType.LOGIN_REQUEST]: (state = initialStates, action) => ({
      ...state,
      isLoading: true,
    }),
    [LoginActionType.LOGIN_SUCCESS]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,
      isLoggedIn: true
    }),
    [LoginActionType.LOGIN_FAILURE]: (state = initialStates, action) => ({
      ...state,
      isLoading: false
    })
  },
  initialStates
)
export default LoginReducer