import { createLogic } from 'redux-logic';
import { loginReq, LoginActionType, loginSuccess } from '../action/login';

const LoginLogic = createLogic({
  type: LoginActionType.LOGIN_REQUEST,
  // your code here, hook into one or more of these execution
  // phases: validate, transform, and/or process
  process({ getState, action }, dispatch, done) {
    axios.get('http://flowhaus.club/flowhaus/api/login')
      .then(resp => resp.data)
      .then(data => dispatch(loginSuccess()))
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