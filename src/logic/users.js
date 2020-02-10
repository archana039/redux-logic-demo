import { createLogic } from 'redux-logic';
import { usersListReq, usersListFailure, usersListSuccess, editUserReq, editUserSuccess, deleteUserReq, deleteUserSuccess, deleteUserFailure, userStatusReq, userStatusSuccess } from '../action';
import { toast } from "react-toastify";
import { ApiHelper } from '../config/ApiHealper'
import ApiRoutes from '../config/ApiRoutes'

const UsersListLogic = createLogic({
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
      { skip: action.payload.skip, limit: action.payload.limit },
      action.payload
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


// Edit users logic

const EditUserLogic = createLogic({
  type: editUserReq,
  // your code here, hook into one or more of these execution
  // phases: validate, transform, and/or process
  async process({ getState, action }, dispatch, done) {
    console.log(action.payload)
    const result = await new ApiHelper().FetchFromServer(
      ApiRoutes.EDITUSER.service,
      ApiRoutes.EDITUSER.url,
      ApiRoutes.EDITUSER.method,
      ApiRoutes.EDITUSER.authenticate,
      undefined,
      action.payload
    );
    if (result.data && result.isError === false) {
      dispatch(editUserSuccess(result.data))
      localStorage.setItem("token", result.data.token)
      toast.success(result.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error(result.messages[0], {
        position: toast.POSITION.TOP_RIGHT,
      });
      // dispatch(())
    }
    done()
    // call done when finished dispatching
  }
});

// Delete user logic
const DeleteUserLogic = createLogic({
  type: deleteUserReq,
  // your code here, hook into one or more of these execution
  // phases: validate, transform, and/or process
  async process({ getState, action }, dispatch, done) {
    console.log("delete")
    const result = await new ApiHelper().FetchFromServer(
      ApiRoutes.DELETEUSER.service,
      ApiRoutes.DELETEUSER.url,
      ApiRoutes.DELETEUSER.method,
      ApiRoutes.DELETEUSER.authenticate,
      undefined,
      action.payload
    );
    if (result.data && result.isError === false) {
      dispatch(deleteUserSuccess(result.data))
      localStorage.setItem("token", result.data.token)
      toast.success(result.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error(result.messages[0], {
        position: toast.POSITION.TOP_RIGHT,
      });
      // dispatch(())
    }
    done()
    // call done when finished dispatching
  }
});

const UserStatusLogic = createLogic({
  type: userStatusReq,
  // your code here, hook into one or more of these execution
  // phases: validate, transform, and/or process
  async process({ getState, action }, dispatch, done) {
    console.log(ApiRoutes.USERSTATUS.url)
    const result = await new ApiHelper().FetchFromServer(
      ApiRoutes.USERSTATUS.service,
      ApiRoutes.USERSTATUS.url.replace(action.payload.id),
      ApiRoutes.USERSTATUS.method,
      ApiRoutes.USERSTATUS.authenticate,
      undefined,
      action.payload
    );
    if (result.data && result.isError === false) {
      dispatch(userStatusSuccess(result.data))
      localStorage.setItem("token", result.data.token)
      toast.success(result.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error(result.messages[0], {
        position: toast.POSITION.TOP_RIGHT,
      });
      // dispatch(())
    }
    done()
    // call done when finished dispatching
  }
});
export const AllUserLogic = [
  UsersListLogic,
  EditUserLogic,
  UserStatusLogic,
  DeleteUserLogic
]