import { handleActions } from 'redux-actions';
import { forgotPasswordActionType } from '../action/forgotpassword'
const initialStates = { isLoading: false, forgotPassword: false }
const ForgotPasswordReducer = handleActions(
  {
    [forgotPasswordActionType.forgotPasswordReq]: (state = initialStates, action) => ({
      ...state,
      isLoading: true
    }),
    [forgotPasswordActionType.forgotPasswordSuccess]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,
      forgotPassword: false
    }),
    [forgotPasswordActionType.forgotPasswordFailure]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,
      forgotPassword: true
    })
  },
  initialStates
)
export default ForgotPasswordReducer