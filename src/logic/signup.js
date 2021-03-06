import { createLogic } from 'redux-logic';
import { signUpReq, signUpSuccess, signUpFailure } from '../action/signup'
import FetchFromServer from '../config/ApiHealper'
import { toast } from "react-toastify";
import { ApiHelper } from '../config/ApiHealper'
import ApiRoutes from '../config/ApiRoutes'
export const SignUpLogic = createLogic({
  type: signUpReq,

  async process({ getState, action }, dispatch, done) {
    const result = await new ApiHelper().FetchFromServer(
      ApiRoutes.SIGNUP.service,
      ApiRoutes.SIGNUP.url,
      ApiRoutes.SIGNUP.method,
      ApiRoutes.SIGNUP.authenticate,
      undefined,
      action.payload
    );
    console.log(result)
    if (result && result.isError === false) {
      dispatch(signUpSuccess())
      toast.success(result.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    else {
      dispatch(signUpFailure())
      console.log(result.messages[0])
      toast.error(result.messages[0], {
        position: toast.POSITION.TOP_RIGHT
      })
    }
  }
})
