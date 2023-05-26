import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx'
import Home from './Home/Home.jsx'
import Kabar from './Kabar.jsx';




const router = createBrowserRouter([
    
  {
    path: "/",
    element: <Layout></Layout>,
    children:[


      {
          path: "/",
          element: <Home></Home>,   
      }
      ,
      {
        path: "/menu",
        element: <Kabar></Kabar>, 
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(

  <HelmetProvider>
  
      
      <RouterProvider router={router} />
 
  </HelmetProvider>
)
