import { createLogic } from 'redux-logic';
import { linkVerificationReq, linkVerificationSuccess, linkVerificationFailure } from '../action/linkverification';
import { toast } from "react-toastify";
import { ApiHelper } from '../config/ApiHealper'
import ApiRoutes from '../config/ApiRoutes'
let token = localStorage.getItem('token')

export const LinkVerificationLogic = createLogic({
  type: linkVerificationReq,
  async process({ getState, action }, dispatch, done) {
    let query = {
      email: action.payload.email,
      id: action.payload.id,
      token: action.payload.token
    }
    const result = await new ApiHelper().FetchFromServer(
      ApiRoutes.LINKVERIFICATION.service,
      ApiRoutes.LINKVERIFICATION.url,
      ApiRoutes.LINKVERIFICATION.method,
      ApiRoutes.LINKVERIFICATION.authenticate,
      query,
      undefined,

    );
    if (result && result.isError === false) {
      dispatch(linkVerificationSuccess(result.data))
      toast.success(result.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    else {
      console.log(result, 'result')
      dispatch(linkVerificationFailure())
      toast.error(result.messages[0], {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }
})
