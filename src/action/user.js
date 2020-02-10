import { createAction } from 'redux-actions';
export const usersActionType = {
  USERSLIST_REQUEST: "USERSLIST_REQUEST",
  USERSLIST_SUCCESS: "USERSLIST_SUCCESS",
  USERSLIST_FAILURE: " USERSLIST_FAILURE",
  EDITUSER_REQUEST : "EDITUSER_REQUEST",
  EDITUSER_SUCCESS : "EDITUSER_SUCCESS",
  EDITUSER_FAILURE : "EIDTUSER_FAILURE",
  DELETEUSER_REQUEST: "Delete user request",
  DELETEUSER_SUCCESS: "Delete user success",
  DELETEUSER_FAILURE:'Delete user failure',
  USERSTATUS_REQUEST :"Request for user status",
  USERSTATUS_SUCCESS:"Success of user status",
  USERSTIAUS_FAILURE:"Failure of user staus"

}
export const usersListReq = createAction(usersActionType.USERSLIST_REQUEST)
export const usersListSuccess = createAction(usersActionType.USERSLIST_SUCCESS)
export const usersListFailure = createAction(usersActionType.USERSLIST_FAILURE)
export const editUserReq = createAction(usersActionType.EDITUSER_REQUEST)
export const editUserSuccess = createAction(usersActionType.EDITUSER_SUCCESS)
export const editUserFailure = createAction(usersActionType.EDITUSER_FAILURE)
export const deleteUserReq = createAction(usersActionType.DELETEUSER_REQUEST)
export const deleteUserSuccess = createAction(usersActionType.DELETEUSER_SUCCESS)
export const deleteUserFailure = createAction(usersActionType.DELETEUSER_FAILURE)
export const userStatusReq = createAction(usersActionType.USERSTATUS_REQUEST)
export const userStatusSuccess = createAction(usersActionType.USERSTATUS_SUCCESS)
export const userStatusFailure = createAction(usersActionType.USERSTIAUS_FAILURE)

