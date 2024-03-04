import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import About from "../components/About";
import Resources from "../components/Resources";

import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import EditBooks from "../dashboard/EditBooks";
import ManageBooks from "../dashboard/ManageBooks";

import Goals from "../home/Goals";
import Impact from "../home/Impact";

import DashboardLayout from "../dashboard/DashboardLayout";
import Team from "../team/Team";
import SingleMember from "../team/SingleMember";
import Contact from "../components/Contact";
import { Landing } from "../home/Landing";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:"/",
            element:<Landing/>
        },
        {
            path:"/home",
            element:<Home/>
        },
        {
            path:"/team",
            element:<Team/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/impact",
            element:<Impact/>
        },
        {
            path:"/goals",
            element:<Goals/>
        },  
        {
          path:"/resources",
          element:<Resources/>
        }  , 
        {
          path:"/contact",
          element:<Contact/>
        }  , 
        
        {
          path:"/boardsOfDirectors/:id",
          element:<SingleMember/>, 
          loader: ({params}) => fetch(`http://localhost:5000/boardsOfDirectors/${params.id}`) 
        },
        {
          path:"/advisoryComittee/:id",
          element:<SingleMember/>, 
          loader: ({params}) => fetch(`http://localhost:5000/advisoryComittee/${params.id}`) 
        },
        {
          path:"/manager/:id",
          element:<SingleMember/>, 
          loader: ({params}) => fetch(`http://localhost:5000/manager/${params.id}`) 
        },
        {
          path:"/fieldTeam/:id",
          element:<SingleMember/>, 
          loader: ({params}) => fetch(`http://localhost:5000/fieldTeam/${params.id}`) 
        },
     ]
    },
    {
      path:"/admin/dashboard",
      element:<DashboardLayout/>,
      children:[
        {
          path:"/admin/dashboard",
          element:<Dashboard/>
        },
        {
          path:"/admin/dashboard/upload",
          element: <UploadBook/>
        },
        {
          path:"/admin/dashboard/manage",
          element: <ManageBooks/>
        },
        {
          path:"/admin/dashboard/editBooks/:id",
          element: <EditBooks/>,
          loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        }
      ]
    }
  ]);

  export default router;