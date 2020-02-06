import { handleActions } from 'redux-actions';
import { resetpasswordActionType } from '../action/resetpassword'
const initialStates = { isLoading: false, PasswordSuccess: false }
const ResetPasswordReducer = handleActions(
  {
    [resetpasswordActionType.RESETPASSWORD_REQUEST]: (state = initialStates, action) => ({
      ...state,
      isLoading: true
    }),
    [resetpasswordActionType.RESETPASSWORD_SUCCESS]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,
      PasswordSuccess: true
    }),
    [resetpasswordActionType.RESETPASSWORD_FAILURE]: (state = initialStates, action) => ({
      ...state,

    })
  },
  initialStates
)
export default ResetPasswordReducer