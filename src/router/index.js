import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { AppRoutes } from '../config/AppRoutes';
import SignIn from '../Auth/login';

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
    </Switch>
  )
}