import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router, } from 'react-router-dom';
//import TablePage from '../pages/TablePage';
import { Routes } from "../routes";

import Clientes from "./../pages/Clientes";
import ListarClientes from "./../pages/clientes/listar";
import Signin from "./../pages/examples/Signin";

// components
import Sidebar from "./../components/Sidebar";
//import Navbar from "./../pages/components/Navbar";
import Navbar from "./../components/Navbar";
import Preloader from "./../components/Preloader";
import NotFound from "./../pages/examples/NotFound";
import Login from "./../pages/examples/Signin";


import { withAuthorizationRouter } from './auth';

import { UseAuthProvider } from './../contexts/authContext';

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => (<> <Preloader show={loaded ? false : true} /> <Component {...props} /> </>)} />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        <Sidebar />

        <main className="content">
          <Navbar />
          <Component {...props} />
        </main>
      </>
    )}
    />
  );
};

export function Application() {
  const [{ rehydrated, auth }] = UseAuthProvider();
  if (!rehydrated) {
    return <div>loading</div>;
  }

  return (
    <Router>
      <Switch>

        {auth && auth.token &&
          <RouteWithSidebar exact path={Routes.Clientes.path} component={Clientes} />
        }
        {auth && auth.token &&
          <RouteWithLoader exact path={Routes.Login.path} component={Login} />
        }
        <RouteWithLoader exact path={Routes.Login.path} component={Signin} />
        <RouteWithLoader exact path={Routes.NotFound.path} component={NotFound} />

        {/* <RouteWithSidebar exact path={Routes.ListarClientes.path} component={ListarClientes} /> */}

        {/* <Route exact path="/Clientes" component={withAuthorizationRouter(Clientes)} /> */}
        {/* <Route exact path="/tablep" component={TablePage} /> */}
        <Redirect to={Routes.NotFound.path} />
      </Switch>
    </Router>
  );
}
