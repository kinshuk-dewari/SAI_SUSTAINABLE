import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import About from "../components/About";
import Resources from "../components/Resources";
import Goals from "../home/Goals";
import Impact from "../home/Impact";
import Team from "../team/Team";
import SingleMember from "../team/SingleMember";
import Contact from "../components/Contact";
import { Landing } from "../home/Landing";
const result = import.meta.env.VITE_DATABASE_URL;
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
          loader: ({params}) => fetch(result+`/boardsOfDirectors/${params.id}`) 
        },
        {
          path:"/advisoryComittee/:id",
          element:<SingleMember/>, 
          loader: ({params}) => fetch(result+`/advisoryComittee/${params.id}`) 
        },
        {
          path:"/manager/:id",
          element:<SingleMember/>, 
          loader: ({params}) => fetch(result+`/manager/${params.id}`) 
        },
        {
          path:"/fieldTeam/:id",
          element:<SingleMember/>, 
          loader: ({params}) => fetch(result+`/fieldTeam/${params.id}`) 
        },
     ]
    }
    
  ]);

  export default router;