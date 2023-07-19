import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './reset.scss';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home, Skills, Portfolio, Contact} from "./Layout";

export const navigation = [{
    path:"/" || "/home",
    name:"Home",
    element: <Home/>
},{
    path: "/skills",
    name:"Skills",
    element: <Skills/>
},{
    path:"/contact",
    name:"Contact",
    element: <Contact/>
}]

const router = createBrowserRouter(navigation);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router = {router}>
        <App />
      </RouterProvider>
  </React.StrictMode>
);
