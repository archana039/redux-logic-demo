import { createLogic } from 'redux-logic';
import { usersListReq, usersListFailure, usersListSuccess } from '../action/users';
import { toast } from "react-toastify";
import { ApiHelper } from '../config/ApiHealper'
import ApiRoutes from '../config/ApiRoutes'
export const UsersListLogic = createLogic({
  type: usersListReq,
  // your code here, hook into one or more of these execution
  // phases: validate, transform, and/or process
  async process({ getState, action }, dispatch, done) {
    console.log(action.payload)
    const result = await new ApiHelper().FetchFromServer(
      ApiRoutes.GETUSERSLIST.service,
      ApiRoutes.GETUSERSLIST.url,
      ApiRoutes.GETUSERSLIST.method,
      ApiRoutes.GETUSERSLIST.authenticate,
      undefined,
      undefined
    );
    console.log(result, 'result')
    if (result.data && result.isError === false) {
      dispatch(usersListSuccess(result.data))
      localStorage.setItem("token", result.data.token)
      toast.success(result.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error(result.messages[0], {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch(usersListFailure())
    }
    done()
    // call done when finished dispatching
  }
});
