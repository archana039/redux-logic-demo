import { LoginLogic } from './login'
import { SignUpLogic } from './signup'
import { ForgotPasswordLogic } from './forgotPassword'
import { AllBlogLogic } from './blogType'
export const AllLogics = [
  LoginLogic,
  SignUpLogic,
  ForgotPasswordLogic,
  ...AllBlogLogic
]
