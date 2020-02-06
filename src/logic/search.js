// import { createLogic } from 'redux-logic';
// import { searchReq, searchFailure, searchSuccess } from '../action/search';
// import FetchFromServer from '../config/ApiHealper'
// import { toast } from "react-toastify";
// let token = localStorage.getItem("token")
// export const SearchLogic = createLogic({
//   type: searchReq,
//   // your code here, hook into one or more of these execution
//   // phases: validate, transform, and/or process
//   async process({ getState, action }, dispatch, done) {

//     const result = await FetchFromServer('search_city_country_suggetion?keywords', 'GET', action.payload, token)
//     console.log(result, 'result')
//     // if (result.data.success) {
//     //   dispatch(loginSuccess())
//     //   toast.success(result.data.message, {
//     //     position: toast.POSITION.TOP_RIGHT,
//     //   });
//     // } 
//     // if (result.status === true) {
//     //   dispatch(searchSuccess(result))
//     //   toast.success(result.message, {
//     //     position: toast.POSITION.TOP_RIGHT,
//     //   });
//     // } else {
//     //   toast.error(result.data.message, {
//     //     position: toast.POSITION.TOP_RIGHT,
//     //   });
//     //   dispatch(searchFailure())
//     // }
//     done()
//     // call done when finished dispatching
//   }
// });
