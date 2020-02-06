// import { createLogic } from 'redux-logic';
// import { blogTypeReq, blogTypeSuccess, blogTypeFailure, blogTypeActionType, editBlogSuccess, editBlogFailure, submitEditBlogSuccess, listBlogSuccess, listBlogFailure, deleteBlogSuccess, deleteBlogFailure } from '../action/blogType';
// import FetchFromServer from '../config/ApiHealper'
// import { toast } from "react-toastify";

// const blogTypeLogic = createLogic({
//   type: blogTypeActionType.BLOGTYPE_REQUEST,
//   // your code here, hook into one or more of these execution
//   // phases: validate, transform, and/or process
//   async process({ getState, action }, dispatch, done) {

//     const result = await FetchFromServer('blog_article_type', 'get', "", true)
//     // if (result.data.success) {
//     //   dispatch(loginSuccess())
//     //   toast.success(result.data.message, {
//     //     position: toast.POSITION.TOP_RIGHT,
//     //   });
//     // } 

//     if (result) {
//       dispatch(blogTypeSuccess(result.blog_type))
//       // toast.success(result.message, {
//       //   position: toast.POSITION.TOP_RIGHT,
//       // });
//     } else {
//       // toast.error(result.data.message, {
//       //   position: toast.POSITION.TOP_RIGHT,
//       // });
//       dispatch(blogTypeFailure())
//     }
//     done()
//     // call done when finished dispatching
//   }
// });
// let token = localStorage.getItem("token")
// const addBlogLogic = createLogic({
//   type: blogTypeActionType.ADDBLOG_REQUEST,
//   // your code here, hook into one or more of these execution
//   // phases: validate, transform, and/or process
//   async process({ getState, action }, dispatch, done) {

//     const result = await FetchFromServer('add_blog', 'POST', action.payload, token)
//     // if (result.data.success) {
//     //   dispatch(loginSuccess())
//     //   toast.success(result.data.message, {
//     //     position: toast.POSITION.TOP_RIGHT,
//     //   });
//     // } 

//     if (result) {
//       dispatch(blogTypeSuccess())
//       // toast.success(result.message, {
//       //   position: toast.POSITION.TOP_RIGHT,
//       // });
//     } else {
//       // toast.error(result.data.message, {
//       //   position: toast.POSITION.TOP_RIGHT,
//       // });
//       dispatch(blogTypeFailure())
//     }
//     done()
//     // call done when finished dispatching
//   }
// });
// const EditBlogLogic = createLogic({
//   type: blogTypeActionType.EDITBLOG_REQUEST,
//   // your code here, hook into one or more of these execution
//   // phases: validate, transform, and/or process
//   async process({ getState, action }, dispatch, done) {

//     const result = await FetchFromServer(`blogs_detail/${action.payload}`, 'GET', '', token)
//     // if (result.data.success) {
//     //   dispatch(loginSuccess())
//     //   toast.success(result.data.message, {
//     //     position: toast.POSITION.TOP_RIGHT,
//     //   });
//     // } 

//     if (result) {
//       dispatch(editBlogSuccess(result))
//       // toast.success(result.message, {
//       //   position: toast.POSITION.TOP_RIGHT,
//       // });
//     } else {
//       // toast.error(result.data.message, {
//       //   position: toast.POSITION.TOP_RIGHT,
//       // });
//       dispatch(editBlogFailure())
//     }
//     done()
//     // call done when finished dispatching
//   }
// });

// const SubmitEditBlogLogic = createLogic({
//   type: blogTypeActionType.SUBMITEDITBLOG_REQUEST,
//   // your code here, hook into one or more of these execution
//   // phases: validate, transform, and/or process
//   async process({ getState, action }, dispatch, done) {

//     const result = await FetchFromServer(`add_blog`, 'POST', action.payload, token)
//     // if (result.data.success) {
//     //   dispatch(loginSuccess())
//     //   toast.success(result.data.message, {
//     //     position: toast.POSITION.TOP_RIGHT,
//     //   });
//     // } 

//     if (result) {
//       dispatch(submitEditBlogSuccess(result))
//       toast.success(result.message, {
//         position: toast.POSITION.TOP_RIGHT,
//       });
//     } else {
//       toast.error(result.message, {
//         position: toast.POSITION.TOP_RIGHT,
//       });
//       dispatch(editBlogFailure())
//     }
//     done()
//     // call done when finished dispatching
//   }
// });

// const ListBlogLogic = createLogic({
//   type: blogTypeActionType.LISTBLOG_REQUEST,
//   // your code here, hook into one or more of these execution
//   // phases: validate, transform, and/or process
//   async process({ getState, action }, dispatch, done) {

//     const result = await FetchFromServer(`my_blogs?offest=${0}&limit=${5}`, 'GET', '', token)
//     // if (result.data.success) {
//     //   dispatch(loginSuccess())
//     //   toast.success(result.data.message, {
//     //     position: toast.POSITION.TOP_RIGHT,
//     //   });
//     // } 

//     if (result) {
//       dispatch(listBlogSuccess(result))
//       toast.success(result.message, {
//         position: toast.POSITION.TOP_RIGHT,
//       });
//     } else {
//       // toast.error(result.data.message, {
//       //   position: toast.POSITION.TOP_RIGHT,
//       // });
//       dispatch(listBlogFailure())
//     }
//     done()
//     // call done when finished dispatching
//   }
// });

// const DeleteBlogLogic = createLogic({
//   type: blogTypeActionType.DELETEBLOG_REQUEST,
//   // your code here, hook into one or more of these execution
//   // phases: validate, transform, and/or process
//   async process({ getState, action }, dispatch, done) {

//     const result = await FetchFromServer(`/delete_blog/${action.payload}`, 'GET', '', token)

//     if (result) {
//       dispatch(deleteBlogSuccess(result))
//       toast.success(result.message, {
//         position: toast.POSITION.TOP_RIGHT,
//       });
//     } else {
//       // toast.error(result.data.message, {
//       //   position: toast.POSITION.TOP_RIGHT,
//       // });
//       dispatch(deleteBlogFailure())
//     }
//     done()
//     // call done when finished dispatching
//   }
// });
// export const AllBlogLogic = [
//   addBlogLogic,
//   blogTypeLogic,
//   EditBlogLogic,
//   SubmitEditBlogLogic,
//   ListBlogLogic,
//   DeleteBlogLogic
// ]