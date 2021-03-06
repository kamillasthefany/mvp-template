import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter } from "react-router-dom";

import "./scss/volt.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";

///import { Application } from './app/rotas-original';
import { Routes } from './../src/app/index';
import { AuthProvider } from './../src/contexts/authContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.render(
  <>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </AuthProvider>
  </>,
  document.getElementById("root")
);
