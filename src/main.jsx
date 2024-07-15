import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Pages/Home.jsx';
import AuthProvider from './Providers/AuthProvider/AuthProvider.jsx';
import Register from './Pages/Register/Register.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <></>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
