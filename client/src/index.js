import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter } from "react-router-dom";

import "./scss/volt.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";

// import HomePage from "./pages/HomePage";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import { Application } from './app/rotas';
import { AuthProvider } from './../src/contexts/authContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.render(
  <>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        {/* <ScrollToTop /> */}
        <Application />
      </QueryClientProvider>
    </AuthProvider>
  </>,


  // <HashRouter>
  //   <ScrollToTop />
  //   <Home />
  // </HashRouter>,
  document.getElementById("root")
);
