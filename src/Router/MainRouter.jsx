import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import OurManue from "../Pages/Our Manue/OurManue";
import OurShop from "../Pages/Our Shop/OurShop";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Profile from "../Pages/Profile/Profile";
import Private from "../Private/private";
import Deshbord from "../Layout/Deshbord";
import ShopinhCaert from "../Pages/Deshbord/Users/ShopinhCaert";
import UserHome from "../Pages/Deshbord/Users/UserHome";
import AllUser from "../Pages/Deshbord/Admin/AllUser";
import AdminRoute from "../Private/AdminRoute";
import Additems from "../Pages/Deshbord/Admin/Additems";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/ourmanue",
        element: <OurManue></OurManue>,
      },
      {
        path: "/ourshop",
        element: <OurShop></OurShop>,
      },
      {
        path: "/profile",
        element: (
          <Private>
            <Profile></Profile>
          </Private>
        ),
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/deshbord",
    element: (
      <Private>
        <Deshbord></Deshbord>
      </Private>
    ),
    children: [
      // admin deshbord--------------------
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: "additems",
        element: (
          <AdminRoute>
            <Additems></Additems>
          </AdminRoute>
        ),
      },

      // user deshbord.............
      {
        path: "mycart",
        element: (
          <Private>
            <ShopinhCaert></ShopinhCaert>
          </Private>
        ),
      },
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },
    ],
  },
]);

export default MainRouter;
