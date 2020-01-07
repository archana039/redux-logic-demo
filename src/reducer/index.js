import { combineReducers } from 'redux'
import LoginReducer from './login'
import SignUpReducer from './signup'
import ForgotPasswordReducer from './forgotPassword'
import BlogTypeReducer from './blogType'
export default combineReducers({
  LoginReducer,
  SignUpReducer,
  ForgotPasswordReducer,
  BlogTypeReducer
})