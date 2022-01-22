/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */

import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Login from './../pages/examples/Signin';
import { Application } from './application';
import { UseAuthProvider } from './../contexts/authContext';

export const Routes = () => {
  const [{ rehydrated, auth }] = UseAuthProvider();

  if (!rehydrated) {
    return <div>loading</div>;
  }
  return (
    <Router>
      <Switch>
        {auth && auth.token &&
          <Route to="/app" render={props => <Application {...props} />} />
        }
        <Route path="/" component={Login} />
        <Redirect to="/" exact component={Login} />
      </Switch>
    </Router>
  );
};
