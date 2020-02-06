import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { AppRoutes } from '../config/AppRoutes';
import SignIn from '../Auth/login';
import SignUp from '../Auth/Signup'
import Dashboard from '../Auth/dashboard'
import ForgotPassword from '../Auth/forgotpassword'
import Shop from '../Auth/shop'
import BlogList from '../list/blogList'
import Search from '../list/search'
import ChangePassword from '../Auth/changePassword'
import ResetPassword from '../Auth/resetpassword'
const DefaultLayout = ({ component: Component, layout: Layout, ...rest }) => {
  return (

    <Route
      {...rest}
      render={props => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};
export const RenderRoutes = () => {
  return (
    <Switch>
      <Route exact path={AppRoutes.LOGIN} component={SignIn} />
      <Route exact path={AppRoutes.SIGNUP} component={SignUp} />
      <Route exact path={AppRoutes.DASHBOARD} component={Dashboard} />
      <Route exact path={AppRoutes.FORGOTPASSWORD} component={ForgotPassword} />
      <Route exact path={AppRoutes.BLOG} component={Shop} />
      <Route exact path={AppRoutes.BLOGLIST} component={BlogList} />
      <Route exact path={AppRoutes.EDITBLOG} component={Shop} />
      <Route exact path={AppRoutes.SEARCH} component={Search} />
      <Route exact path={AppRoutes.CHANGEPASSWORD} component={ChangePassword} />
      <Route exact path={AppRoutes.RESETPASSWORD} component={ResetPassword} />
    </Switch>
  )
}

