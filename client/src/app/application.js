import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import CadastrarClientes from '../pages/clientes/Cadastrar';
import ListarClientes from '../pages/clientes/Listar';
import CadastrarVendas from '../pages/vendas/Cadastrar';
import { Home } from '../pages/Home';
import { Teste } from '../pages/Teste';
import { TesteRota } from '../pages/TesteRota';
import { WithAuthorizationRouter } from './auth';

import Clientes from "../pages/clientes/Cadastrar";
//import ListarClientes from "./../pages/clientes/listar";
import Signin from "../pages/examples/Signin";

// components
import Sidebar from "../components/Sidebar";
//import Navbar from "./../pages/components/Navbar";
import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader";
import NotFound from "../pages/examples/NotFound";
//import Login from "../pages/examples/Signin";

import ListarVendas from '../pages/vendas/Listar.js';
//import CadastrarVendas from '../pages/vendas/Cadastrar';

import CadastrarUsuarios from '../pages/usuarios/Cadastrar';
import ListarUsuarios from '../pages/usuarios/Listar';
import Presentation from '../pages/Presentation';
import Dashboard from '../pages/dashboard/DashboardOverview';

//import ListarClientes from '../pages/clientes/Listar.js';
//import CadastrarClientes from '../pages/clientes/Cadastrar';


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
  return (
    <Switch>
      {/* <Route
        exact
        path="/"
        component={WithAuthorizationRouter(CadastrarClientes)}
      /> */}
      <RouteWithSidebar exact path="/" component={WithAuthorizationRouter(TesteRota)} />
      <RouteWithSidebar exact path="/cliente/cadastrar" component={WithAuthorizationRouter(CadastrarClientes)} />
      <RouteWithSidebar exact path="/cliente/listar" component={WithAuthorizationRouter(ListarClientes)} />
      <RouteWithSidebar exact path="/home" component={WithAuthorizationRouter(Dashboard)} />
      <RouteWithSidebar exact path="/dashboard" component={WithAuthorizationRouter(Dashboard)} />
      <RouteWithLoader exact path="/teste" component={WithAuthorizationRouter(Teste)} />
      <RouteWithSidebar exact path="/vendas/cadastrar" component={WithAuthorizationRouter(CadastrarVendas)} />
      <RouteWithSidebar exact path="/vendas/listar" component={WithAuthorizationRouter(ListarVendas)} />

      <RouteWithSidebar exact path="/usuarios/cadastrar" component={WithAuthorizationRouter(CadastrarUsuarios)} />
      <RouteWithSidebar exact path="/usuarios/listar" component={WithAuthorizationRouter(ListarUsuarios)} />

      {/* <Route
        exact
        path="/home"
        component={WithAuthorizationRouter(CadastrarVendas)}
      /> */}
      {/* <Route
        exact
        path="/teste"
        component={ListarClientes}
      /> */}

    </Switch>
  );
}
