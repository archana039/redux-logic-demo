import { SignupActionType } from "../action/signup";
import { handleActions } from 'redux-actions';
const initialStates = { isLoading: false, isSignup: false }

const SignUpReducer = handleActions(
  {
    [SignupActionType.SIGNUP_REQUEST]: (state = initialStates, action) => ({
      ...state,
      isLoading: true,
    }),
    [SignupActionType.SIGNUP_SUCCESS]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,
      isSignup: true
    }),
    [SignupActionType.SIGNUP_FAILURE]: (state = initialStates, action) => ({
      ...state,
      isLoading: false
    })
  },
  initialStates
)
export default SignUpReducer