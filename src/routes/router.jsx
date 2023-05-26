
import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from '../Home/Home';



const routerr = createBrowserRouter([
      
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
const router = () => {
return(

  
      
   

<></>










)

};

export default router;