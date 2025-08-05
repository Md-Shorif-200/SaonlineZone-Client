import {
  createBrowserRouter,

} from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/HomePage.jsx/Home";
import About from "../Pages/AboutPage/About";



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
]);