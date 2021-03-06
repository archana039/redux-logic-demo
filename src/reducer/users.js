import { handleActions } from 'redux-actions';
import { usersActionType } from '../action'
const initialStates = { isLoading: false, usersList: false, status: false }
const UsersListReducer = handleActions(
  {
    [usersActionType.USERSLIST_REQUEST]: (state = initialStates, action) => ({
      ...state,
      isLoading: true
    }),
    [usersActionType.USERSLIST_SUCCESS]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,
      usersList: true,
      data: action.payload
    }),
    [usersActionType.USERSLIST_FAILURE]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,
      usersList: true
    }),
    [usersActionType.EDITUSER_REQUEST]: (state = initialStates, action) => ({
      ...state,
      isLoading: true
    }),
    [usersActionType.EDITUSER_SUCCESS]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,
      usersList: true,
      data: action.payload
    }),
    [usersActionType.EDITUSER_FAILURE]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,
      usersList: true
    }),
    [usersActionType.DELETEUSER_REQUEST]: (state = initialStates, action) => ({
      ...state,
      isLoading: true
    }),
    [usersActionType.DELETEUSER_SUCCESS]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,
      data: action.payload
    }),
    [usersActionType.DELETEUSER_FAILURE]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,
      usersList: true
    }),
    [usersActionType.USERSTATUS_REQUEST]: (state = initialStates, action) => ({
      ...state,
      isLoading: true
    }),
    [usersActionType.USERSTATUS_SUCCESS]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,
      userStatus: true,
      data: action.payload
    }),
    [usersActionType.USERSTIAUS_FAILURE]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,
      userStatus: true,
      usersList: true
    }),
  },
  initialStates
)
export default UsersListReducer