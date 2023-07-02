import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Homepage from './Pages/Home/Homepage/Homepage';
import MyProjects from './Pages/Home/MyProjects/MyProjects';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Homepage></Homepage>
      },
      {
        path:"/projects",
        element:<MyProjects></MyProjects>
      },
      {
        path:"/about-me",
        element:<MyProjects></MyProjects>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-2xl mx-auto'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
