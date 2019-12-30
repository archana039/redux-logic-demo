import { LoginActionType } from "../action/login";

export const LoginReducer = handleAction(
  {
    [LoginActionType.LOGIN_REQUEST]: (state, action) => ({
      ...state,
      isLoading: true
    }),
    [LoginActionType.LOGIN_SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false
    }),
    [LoginActionType.LOGIN_FAILURE]: (state, action) => ({
      ...state,
      isLoading: false
    })
  }
)