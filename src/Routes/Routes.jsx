import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SeeProjects from "../Pages/SeeProjects/SeeProjects";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
  
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
          {
              path:'/',
              element:<Home></Home>
          },
          {
              path:'/seeprojects',
              element:<SeeProjects></SeeProjects>
          },
          {
              path:'/about',
              element:<About></About>
          },
          {
              path:'/contact',
              element:<Contact></Contact>
          }
      ]
    },
  ]);
  
  