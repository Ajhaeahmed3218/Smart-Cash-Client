import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Error from "../Components/Error";
import Dashbord from "../Layout/Dashbord";
import UserProfile from "../DashbordPages/User/UserProfile";
import SendMoney from "../DashbordPages/User/SendMoney";
import CashOut from "../DashbordPages/User/CashOut";
import CashIn from "../DashbordPages/User/CashIn";
import History from "../DashbordPages/User/History";
import ManageUser from "../DashbordPages/AdminPages/ManageUser";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error/>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: '/register',
          element: <Register /> 
        },
        {
          path: '/login',
          element:  <Login /> 
        },
      ]
    },
    {
        path:'dashbord',
        element:<Dashbord/>,
        errorElement:<Error/>,
        children :[
            // user
          {
            path:'userProfile',
            element:<UserProfile/>
          },
          {
            path:'sendMoney',
            element:<SendMoney/>
          },
          {
            path:'cashOut',
            element:<CashOut/>
          },
          {
            path:'cashIn',
            element:<CashIn/>
          },
          {
            path:'hitory',
            element:<History/>
          },
          
        //   // Admin Route
          {
            path:'manageUsers',
            element:<ManageUser/>
          },
          
        //   {
        //     path:'userComments/:id',
        //     element:<UserComments/>,
        //     loader: ({params}) => fetch(`https://assignment-12-server-six-kappa.vercel.app/comment/${params.id}`)
            
        //   }
          
        ]
      }
  ]);