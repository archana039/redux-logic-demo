import { createAction } from 'redux-actions';
export const blogTypeActionType = {
  BLOGTYPE_REQUEST: "Request for blog type",
  BLOGTYPE_SUCCESS: "Success of blog type",
  BLOGTYPE_FAILURE: "Failure of blog type",
  ADDBLOG_REQUEST: "Request for add blog",
  ADDBLOG_SUCCESS: 'Success of add blog',
  ADDBLOG_FAILURE: 'Failure of add blog',
  EDITBLOG_REQUEST: "Request for edit blog",
  EDITBLOG_SUCCESS: "Success of edit blog",
  EDITBLOG_FAILURE: "Failure of edit blog",
  SUBMITEDITBLOG_REQUEST: 'Request of submit edit blog',
  SUBMITEDITBLOG_SUCCESS: "Success of submit edit blog",
  SUBMITEDITBLOG_FAILURE: 'Failure of submit edit blog',
  LISTBLOG_REQUEST: "Request for blog list",
  LISTBLOG_SUCCESS: "Success of blog list",
  LISTBLOG_FAILURE: "Failure of blog list",
  DELETEBLOG_REQUEST: "Request for delete blog",
  DELETEBLOG_SUCCESS: 'Success of delete blog',
  DELETEBLOG_FAILURE: "Failure of delete blog"
}
export const blogTypeReq = createAction(blogTypeActionType.BLOGTYPE_REQUEST)

export const blogTypeSuccess = createAction(blogTypeActionType.BLOGTYPE_SUCCESS)

export const blogTypeFailure = createAction(blogTypeActionType.BLOGTYPE_FAILURE)

export const addBlogReq = createAction(blogTypeActionType.ADDBLOG_REQUEST)

export const addBlogSuccess = createAction(blogTypeActionType.ADDBLOG_SUCCESS)

export const addBlogFailure = createAction(blogTypeActionType.ADDBLOG_FAILURE)

export const editBlogReq = createAction(blogTypeActionType.EDITBLOG_REQUEST)

export const editBlogSuccess = createAction(blogTypeActionType.EDITBLOG_SUCCESS)

export const editBlogFailure = createAction(blogTypeActionType.EDITBLOG_FAILURE)

export const submitEditBlogReq = createAction(blogTypeActionType.SUBMITEDITBLOG_REQUEST)

export const submitEditBlogSuccess = createAction(blogTypeActionType.SUBMITEDITBLOG_SUCCESS)

export const submitEditBlogFailure = createAction(blogTypeActionType.SUBMITEDITBLOG_FAILURE)

export const listBlogReq = createAction(blogTypeActionType.LISTBLOG_REQUEST)

export const listBlogSuccess = createAction(blogTypeActionType.LISTBLOG_SUCCESS)

export const listBlogFailure = createAction(blogTypeActionType.LISTBLOG_FAILURE)

export const deleteBlogReq = createAction(blogTypeActionType.DELETEBLOG_REQUEST)

export const deleteBlogSuccess = createAction(blogTypeActionType.DELETEBLOG_SUCCESS)

export const deleteBlogFailure = createAction(blogTypeActionType.DELETEBLOG_FAILURE)




