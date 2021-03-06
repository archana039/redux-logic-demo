import { createLogic } from 'redux-logic';
import { forgotPasswordReq, forgotPasswordSuccess, forgotPasswordFailure } from '../action/forgotpassword';
import { toast } from "react-toastify";
import { ApiHelper } from '../config/ApiHealper'
import ApiRoutes from '../config/ApiRoutes'
export const ForgotPasswordLogic = createLogic({
  type: forgotPasswordReq,
  async process({ getState, action }, dispatch, done) {
    const result = await new ApiHelper().FetchFromServer(
      ApiRoutes.FORGOTPASSWORD.service,
      ApiRoutes.FORGOTPASSWORD.url,
      ApiRoutes.FORGOTPASSWORD.method,
      ApiRoutes.FORGOTPASSWORD.authenticate,
      undefined,
      action.payload
    );
    console.log(result)
    if (result && result.isError === false) {
      dispatch(forgotPasswordSuccess())
      toast.success(result.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    else {
      dispatch(forgotPasswordFailure())
      toast.error(result.messages[0], {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }
})
