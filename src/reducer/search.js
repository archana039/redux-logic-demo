import { SearchActionType } from "../action/search";
import { handleActions } from 'redux-actions';

const initialStates = { isLoading: false, isLoggedIn: false, data: {}, }
const SearchReducer = handleActions(
  {
    [SearchActionType.SEARCH_REQUEST]: (state = initialStates, action) => ({
      ...state,
      isLoading: true,
    }),
    [SearchActionType.SEARCH_SUCCESS]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      data: action.payload,

    }),
    [SearchActionType.SEARCH_FAILURE]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,

    })
  },
  initialStates
)
export default SearchReducer