import { createLogic } from 'redux-logic';
import { changePasswordReq, changePasswordSuccess, changePasswordFailure } from '../action/changepassword';
import { toast } from "react-toastify";
import { ApiHelper } from '../config/ApiHealper'
import ApiRoutes from '../config/ApiRoutes'
let token = localStorage.getItem('token')
console.log(token, 'token')
export const ChangePasswordLogic = createLogic({
  type: changePasswordReq,
  async process({ getState, action }, dispatch, done) {
    const result = await new ApiHelper().FetchFromServer(
      ApiRoutes.CHANGEPASSWORD.service,
      ApiRoutes.CHANGEPASSWORD.url,
      ApiRoutes.CHANGEPASSWORD.method,
      ApiRoutes.CHANGEPASSWORD.authenticate,
      undefined,
      action.payload
    );
    if (result && result.isError === false) {
      dispatch(changePasswordSuccess())
      toast.success(result.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    else {
      console.log(result, 'result')
      dispatch(changePasswordFailure())
      toast.error(result.messages[0], {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }
})
