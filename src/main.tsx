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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "category/:categoryId",
        // element: <Category />
      }
      , {
        path: "professional/:professionalId",
        // element: <Professional />
      } 
      , {
        path: "auth",
        element: <Auth />
      } 
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
