import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <></>,
    children: [
      {
        path: "/",
        element: <h1>home</h1> //<Home />
      },
      {
        path: '/page',
        element: <App />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
