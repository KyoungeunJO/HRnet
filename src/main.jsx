import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Employee from './Employee'
import './style/index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    ),
  },
  {
    path: "/employee-list",
    element: <Employee />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
