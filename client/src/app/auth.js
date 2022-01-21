/* eslint-disable  */
import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';

export function withAuthorizationRouter(Component) {
  const [user] = useContext(AuthContext);
  const AuthenticatedComponent = () => {
    const token = user.token;
    const authenticating = (isAuth) => {
      if (isAuth === null) {
        return <Redirect to="/" />;
      }
      if (isAuth === false) {
        return <Redirect to="/" />;
      }
      return <Component />;
    };
    return <>{authenticating(token)}</>;

  }
  return AuthenticatedComponent;
}
