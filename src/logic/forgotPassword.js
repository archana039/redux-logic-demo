import { createLogic } from 'redux-logic';
import { forgotPasswordReq, forgotPasswordSuccess, forgotPasswordFailure } from '../action/forgotpassword';
import FetchFromServer from '../config/ApiHealper'
import { toast } from "react-toastify";

export const ForgotPasswordLogic = createLogic({
  type: forgotPasswordReq,
  async process({ getState, action }, dispatch, done) {
    const result = await FetchFromServer('forget_password', 'POST', action.payload, true)
    if (result.status === true) {
      dispatch(forgotPasswordSuccess())
      toast.success(result.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    else {
      dispatch(forgotPasswordFailure())
      toast.error(result.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }
})
