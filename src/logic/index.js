import { LoginLogic } from './login'
import { SignUpLogic } from './signup'
import { ChangePasswordLogic } from './changepassword'
import { ForgotPasswordLogic } from './forgotPassword'
import { ResetPasswordLogic } from './resetpassword'
// import { AllBlogLogic } from './blogType'
// import { SearchLogic } from './search'
import { LinkVerificationLogic } from './linkverification'
export const AllLogics = [
  LoginLogic,
  SignUpLogic,
  ForgotPasswordLogic,
  // SearchLogic,
  // ...AllBlogLogic
  ChangePasswordLogic,
  ResetPasswordLogic,
  LinkVerificationLogic
]
