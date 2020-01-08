import { createLogic } from 'redux-logic';
import { signUpReq, signUpSuccess, signUpFailure } from '../action/signup'
import FetchFromServer from '../config/ApiHealper'
import { toast } from "react-toastify";

export const SignUpLogic = createLogic({
  type: signUpReq,
  async process({ getState, action }, dispatch, done) {
    const result = await FetchFromServer('signup', 'POST', action.payload, true)
    if (result.status) {
      dispatch(signUpSuccess())
      toast.success(result.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    else {
      dispatch(signUpFailure())
      toast.error(result.message, {
        position: toast.POSITION.TOP_RIGHT
      })
    }
  }
})
