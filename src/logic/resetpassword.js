import { createLogic } from 'redux-logic';
import { resetPasswordReq, resetPasswordSuccess, resetPasswordFailure } from '../action/resetpassword';
import { toast } from "react-toastify";
import { ApiHelper } from '../config/ApiHealper'
import ApiRoutes from '../config/ApiRoutes'
export const ResetPasswordLogic = createLogic({
  type: resetPasswordReq,
  async process({ getState, action }, dispatch, done) {

    const result = await new ApiHelper().FetchFromServer(
      ApiRoutes.RESETPASSWORD.service,
      ApiRoutes.RESETPASSWORD.url,
      ApiRoutes.RESETPASSWORD.method,
      ApiRoutes.RESETPASSWORD.authenticate,
      undefined,
      action.payload
    );
    if (result && result.isError === false) {
      dispatch(resetPasswordSuccess())
      toast.success(result.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    else {
      dispatch(resetPasswordFailure())
      toast.error(result.messages[0], {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }
})
