import { handleActions } from 'redux-actions';
import { changepasswordActionType } from '../action/changepassword'
const initialStates = { isLoading: false, changePassword: false }
const ChangePasswordReducer = handleActions(
  {
    [changepasswordActionType.changePasswordReq]: (state = initialStates, action) => ({
      ...state,
      isLoading: true
    }),
    [changepasswordActionType.changePasswordSuccess]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,
      changePassword: false
    }),
    [changepasswordActionType.changePasswordFailure]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,
      changePassword: true
    })
  },
  initialStates
)
export default ChangePasswordReducer