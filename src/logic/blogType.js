import { createLogic } from 'redux-logic';
import { blogTypeReq, blogTypeSuccess, blogTypeFailure } from '../action/login';
import FetchFromServer from '../config/ApiHealper'
import { toast } from "react-toastify";

const blogTypeLogic = createLogic({
  type: blogTypeReq,
  // your code here, hook into one or more of these execution
  // phases: validate, transform, and/or process
  async process({ getState, action }, dispatch, done) {

    const result = await FetchFromServer('blog_article_type', 'get', "", true)
    // if (result.data.success) {
    //   dispatch(loginSuccess())
    //   toast.success(result.data.message, {
    //     position: toast.POSITION.TOP_RIGHT,
    //   });
    // } 
    if (result.status === true) {
      dispatch(blogTypeSuccess())
      // toast.success(result.message, {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
    } else {
      // toast.error(result.data.message, {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
      dispatch(blogTypeFailure())
    }
    done()
    // call done when finished dispatching
  }
});
export default blogTypeLogic