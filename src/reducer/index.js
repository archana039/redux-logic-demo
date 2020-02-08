import { combineReducers } from 'redux'
import LoginReducer from './login'
import SignUpReducer from './signup'
import ForgotPasswordReducer from './forgotPassword'
import BlogTypeReducer from './blogType'
import SearchReducer from './search'
import ChangePasswordReducer from './changepassword'
import ResetPasswordReducer from './resetpassword'
import LinkVerificationReducer from './linkverification'
import UsersListReducer from './users'
export default combineReducers({
  LoginReducer,
  SignUpReducer,
  ForgotPasswordReducer,
  BlogTypeReducer,
  SearchReducer,
  ChangePasswordReducer,
  ResetPasswordReducer,
  LinkVerificationReducer,
  UsersListReducer
})