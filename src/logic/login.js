import { createLogic } from 'redux-logic';
import { loginReq, LoginActionType, loginSuccess } from '../action/login';
import FetchFromServer from '../config/ApiHealper'
import { toastr } from "react-redux-toastr";
const LoginLogic = createLogic({
  type: LoginActionType.LOGIN_REQUEST,
  // your code here, hook into one or more of these execution
  // phases: validate, transform, and/or process
  process({ getState, action }, dispatch, done) {

    const result =  FetchFromServer('/login', 'POST', action.payload, true)
      .then(data => {
        dispatch({ type: LoginActionType.LOGIN_SUCCESS })
        if (result) {
          console.log(result, 'result')
        }
      })

      .catch(err => {
        console.error(err); // log since could be render err
        dispatch({
          type: LoginActionType.LOGIN_FAILURE, payload: err,
          error: true
        })
      })
      .then(() => done()); // call done when finished dispatching
  }
});
export default LoginLogic