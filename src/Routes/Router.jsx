import {
  createBrowserRouter,

} from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/HomePage.jsx/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard_Redirect from "../Pages/Dashboard/Dashboard_Redirect";
import AllUsers from "../Pages/Dashboard/AdminDashboard/AllUsers";
import Find_Job from "../Pages/Dashboard/UserDashboard/FindJobSection/Find_Job";
import PostJob from "../Pages/Dashboard/UserDashboard/PostJob";
import JobLocation from "../Pages/Dashboard/UserDashboard/PostJobSection/JobLocation";
import JobCategory from "../Pages/Dashboard/UserDashboard/PostJobSection/JobCategory";
import JobInformationForm from "../Pages/Dashboard/UserDashboard/PostJobSection/JobInformationForm";
import JobBudgetForm from "../Pages/Dashboard/UserDashboard/PostJobSection/JobBudgetForm";




export const router = createBrowserRouter([
  {
    path: "/",
    element : <MainLayout></MainLayout>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
          {
            path : '/',
            element : <Home></Home>
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
        path : '/dashboard/Find-Job',
        element : <Find_Job></Find_Job>
      },
      {
        path : '/dashboard/Post-Job',
        element : <PostJob></PostJob>,
        children : [
           {
            path : '/dashboard/Post-Job',
            element : <JobLocation></JobLocation>
           },
           {
            path : '/dashboard/Post-Job/job-category',
            element :  <JobCategory></JobCategory>
           },
           {
            path : '/dashboard/Post-Job/job-information',
            element : <JobInformationForm></JobInformationForm>
           },
           {
            path : '/dashboard/Post-Job/budget-settings',
            element : <JobBudgetForm></JobBudgetForm>
           }
        ]
      }
    ]
  }
]);