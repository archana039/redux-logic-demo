import { blogTypeActionType } from "../action/blogType";
import { handleActions } from 'redux-actions';

const initialStates = { isLoading: false, data: {}, isSuccess: false, isEditSuccess: false, isListSuccess: false, isEditable: false, isDeleted: false }
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

    }),
    [blogTypeActionType.SUBMITEDITBLOG_REQUEST]: (state = initialStates, action) => ({
      ...state,
      isLoading: true,
    }),

    [blogTypeActionType.SUBMITEDITBLOG_SUCCESS]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,
      isEditable: true,
      isEditSuccess: false,
      data: action.payload
    }),
    [blogTypeActionType.SUBMITEDITBLOG_FAILURE]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,

    }),
    [blogTypeActionType.LISTBLOG_REQUEST]: (state = initialStates, action) => ({
      ...state,
      isLoading: true,
    }),

    [blogTypeActionType.LISTBLOG_SUCCESS]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,
      isListSuccess: true,
      data: action.payload
    }),
    [blogTypeActionType.LISTBLOG_FAILURE]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,
    }),
    [blogTypeActionType.SUBMITEDITBLOG_FAILURE]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,

    }),
    [blogTypeActionType.DELETEBLOG_REQUEST]: (state = initialStates, action) => ({
      ...state,
      isLoading: true,
    }),

    [blogTypeActionType.DELETEBLOG_SUCCESS]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,
      isDeleted: true,
      data: action.payload,
      isListSuccess: false
    }),
    [blogTypeActionType.DELETEBLOG_FAILURE]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,

    })

  },
  initialStates
)
export default BlogTypeReducer