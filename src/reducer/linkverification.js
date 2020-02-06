import { linkVerificationActionType } from "../action/linkverification";
import { handleActions } from 'redux-actions';

const initialStates = { isLoading: false, linkverify: false, data: {}, }
const LinkVerificationReducer = handleActions(
  {
    [linkVerificationActionType.LINKVERIFICATION_REQUEST]: (state = initialStates, action) => ({
      ...state,
      isLoading: true,
    }),
    [linkVerificationActionType.LINKVERIFICATION_SUCCESS]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,
      linkverify: true,
      data: action.payload.data,

    }),
    [linkVerificationActionType.LINKVERIFICATION_FAILURE]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,

    })
  },
  initialStates
)
export default LinkVerificationReducer