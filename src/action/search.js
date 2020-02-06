import { createAction } from 'redux-actions';
export const SearchActionType = {
  SEARCH_REQUEST: 'SEARCH_REQUEST',
  SEARCH_SUCCESS: 'SEARCH_SUCCESS',
  SEARCH_FAILURE: 'SEARCH_FAILURE',
}
export const searchReq = createAction(SearchActionType.SEARCH_REQUEST)
export const searchSuccess = createAction(SearchActionType.SEARCH_SUCCESS)
export const searchFailure = createAction(SearchActionType.SEARCH_FAILURE)
