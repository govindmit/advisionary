import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Page} from './types'
import Login from "../container/Login";
import Home from "../container/Home";
import NotFound from "../container/404";
import Header from '../components/Layout/Header'
import Service from "container/service";
import About from "container/about";
import Contact from "container/contact";
import ServiceOne from "container/service-1";
import Modal from "container/modal-example";

export const restrictedRoute = [
  { path: "/", component:  <Home />},
  { path: "/login", component:  <Login />},
  { path: "/services", component:  <Service />},
  { path: "/about-us", component:  <About />},
  { path: "/contact-us", component:  <Contact />},
  { path: "/services-1", component:  <ServiceOne />},
  { path: "/modal", component:  <Modal />},
];



const MainRoutes = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        {restrictedRoute.map((route, index)=><Route path={route.path} element={route.component} />)}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
