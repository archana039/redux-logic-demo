import { blogTypeActionType } from "../action/blogType";
import { handleActions } from 'redux-actions';

const initialStates = { isLoading: false, data: {}, isSuccess: false, isEditSuccess: false }
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

    }),
    [blogTypeActionType.EDITBLOG_REQUEST]: (state = initialStates, action) => ({
      ...state,
      isLoading: true,
    }),

    [blogTypeActionType.EDITBLOG_SUCCESS]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,
      isEditSuccess: true,
      data: action.payload
    }),
    [blogTypeActionType.EDITBLOG_FAILURE]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,

    })
  },
  initialStates
)
export default BlogTypeReducer