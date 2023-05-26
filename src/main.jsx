import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx'
import Home from './Home/Home.jsx'




const router = createBrowserRouter([
    
  {
    path: "/",
    element: <Layout></Layout>,
    children:[


      {
          path: "/",
          element: <Home></Home>,   
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
