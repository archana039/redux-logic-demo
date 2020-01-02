import { createLogic } from 'redux-logic';
import { loginReq, loginFailure, loginSuccess } from '../action/login';
import FetchFromServer from '../config/ApiHealper'
import { toast } from "react-toastify";

const LoginLogic = createLogic({
  type: loginReq,
  // your code here, hook into one or more of these execution
  // phases: validate, transform, and/or process
  async process({ getState, action }, dispatch, done) {

    const result =  await FetchFromServer('auth/login', 'POST', action.payload, true)
    console.log(result)
    if (result.data.success) {
      dispatch(loginSuccess())
      toast.success(result.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error(result.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log("hhhhhhhhhhh")
      dispatch(loginFailure())
    }
    done()
     // call done when finished dispatching
  }
});
export default LoginLogic