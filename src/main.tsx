import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './pages/Error'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './pages/Error';
import App, { loader as rootLoader } from './App';
import Auth from './pages/Auth';
import { CssBaseline } from '@mui/material';
import CategoryPage from './pages/Category';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
  },
  {
    path: "/category/:categoryId",
    element: <CategoryPage />,
  }
  , {
    path: "/professional/:professionalId",
    // element: <Professional />
  } 
  , {
    path: "/auth",
    element: <Auth />
  } 
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
