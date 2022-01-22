import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router, } from 'react-router-dom';
//import TablePage from '../pages/TablePage';
import { Routes } from "../routes";

import Clientes from "../pages/clientes/Cadastrar";
//import ListarClientes from "./../pages/clientes/listar";
import Signin from "./../pages/examples/Signin";

// components
import Sidebar from "./../components/Sidebar";
//import Navbar from "./../pages/components/Navbar";
import Navbar from "./../components/Navbar";
import Preloader from "./../components/Preloader";
import NotFound from "./../pages/examples/NotFound";
import Login from "./../pages/examples/Signin";

import ListarVendas from './../pages/vendas/Listar.js';
import CadastrarVendas from './../pages/vendas/Cadastrar';

import CadastrarUsuarios from './../pages/usuarios/Cadastrar';
import ListarUsuarios from './../pages/usuarios/Listar';

import ListarClientes from './../pages/clientes/Listar.js';
import CadastrarClientes from './../pages/clientes/Cadastrar';


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
        {!auth &&
          <RouteWithLoader exact path={Routes.Login.path} component={Login} />
        }
        {auth && auth.token &&
          <RouteWithSidebar exact path="/clientes/listar" component={ListarClientes} />
        }
        {auth && auth.token &&
          <RouteWithSidebar exact path="/" component={CadastrarClientes} />
        }
        {auth && auth.token &&
          <RouteWithSidebar exact path="/vendas/listar" component={ListarVendas} />
        }
        {auth && auth.token &&
          <RouteWithSidebar exact path="/vendas/cadastrar" component={CadastrarVendas} />
        }
        {auth && auth.token &&
          <RouteWithSidebar exact path="/usuarios/cadastrar" component={CadastrarUsuarios} />
        }
        {auth && auth.token &&
          <RouteWithSidebar exact path="/usuarios/listar" component={ListarUsuarios} />
        }


        <RouteWithLoader exact path={Routes.Login.path} component={Login} />
        <RouteWithLoader exact path={Routes.NotFound.path} component={NotFound} />

        {/* <RouteWithSidebar exact path={Routes.ListarClientes.path} component={ListarClientes} /> */}

        {/* <Route exact path="/Clientes" component={withAuthorizationRouter(Clientes)} /> */}
        {/* <Route exact path="/tablep" component={TablePage} /> */}
        <Redirect to={Routes.NotFound.path} />
      </Switch>
    </Router>
  );
}
