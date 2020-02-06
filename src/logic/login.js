import { createLogic } from 'redux-logic';
import { loginReq, loginFailure, loginSuccess } from '../action/login';
import FetchFromServer from '../config/ApiHealper'
import { toast } from "react-toastify";
import { ApiHelper } from '../config/ApiHealper'
import ApiRoutes from '../config/ApiRoutes'
export const LoginLogic = createLogic({
  type: loginReq,
  // your code here, hook into one or more of these execution
  // phases: validate, transform, and/or process
  async process({ getState, action }, dispatch, done) {
    console.log(action.payload)
    const result = await new ApiHelper().FetchFromServer(
      ApiRoutes.LOGIN.service,
      ApiRoutes.LOGIN.url,
      ApiRoutes.LOGIN.method,
      ApiRoutes.LOGIN.authenticate,
      undefined,
      action.payload
    );
    if (result.data && result.isError === false) {
      dispatch(loginSuccess(result))
      localStorage.setItem("token", result.data.token)
      toast.success(result.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error(result.messages[0], {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch(loginFailure())
    }
    done()
    // call done when finished dispatching
  }
});
