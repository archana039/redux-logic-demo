import { blogTypeActionType } from "../action/blogType";
import { handleActions } from 'redux-actions';

const initialStates = { isLoading: false, data: {} }
const BlogTypeReducer = handleActions(
  {
    [blogTypeActionType.BLOGTYPE_REQUEST]: (state = initialStates, action) => ({
      ...state,
      isLoading: true,
    }),
    [blogTypeActionType.BLOGTYPE_SUCCESS]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,
      data: action.payload
    }),
    [blogTypeActionType.BLOGTYPE_FAILURE]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,

    })
  },
  initialStates
)
export default BlogTypeReducer