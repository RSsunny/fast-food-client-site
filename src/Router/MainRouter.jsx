import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import OurManue from "../Pages/Our Manue/OurManue";

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
    ],
  },
]);

export default MainRouter;
