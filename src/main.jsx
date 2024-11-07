import { StrictMode } from 'react'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import PageLayout from './Components/PageLayout/PageLayout';
import Home from './pages/Home';
import Error from './pages/Error';
import Product from './pages/Product';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path : '/',
    element : <PageLayout />,
    children : [
      {
        path : '/',
        element : <Home />
      },
      {
        path : '/home',
        element : <Home />
      },
      {
        path : '/product',
        element : <Product />
      },
  ]
  },
  {
      path : '*',
      element : <Error />
  },
  {
    path : '/contact',
    element : <Contact />
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
