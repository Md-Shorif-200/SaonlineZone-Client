import {
  createBrowserRouter,

} from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/HomePage.jsx/Home";
import About from "../Pages/AboutPage/About";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard_Redirect from "../Pages/Dashboard/Dashboard_Redirect";
import AllUsers from "../Pages/Dashboard/AdminDashboard/AllUsers";



export const router = createBrowserRouter([
  {
    path: "/",
    element : <MainLayout></MainLayout>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
          {
            path : '/',
            element : <Home></Home>
          },
          {
            path : '/about-us',
            element : <About></About>
          }
    ]
  },
  // dashboard layout
  {
    path : '/dashboard',
    element : <DashboardLayout></DashboardLayout>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/dashboard',
        element : <Dashboard_Redirect></Dashboard_Redirect>
      },
      {
        path : '/dashboard/admin-menu',
        element : <AllUsers></AllUsers>
      }
    ]
  }
]);