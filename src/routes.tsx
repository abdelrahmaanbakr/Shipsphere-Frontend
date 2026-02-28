import { createBrowserRouter } from "react-router-dom";
import Auth from "./Layouts/Auth";
import MainLayout from "./Layouts/MainLayout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ForgotPassword from "./pages/Login/ForgotPassword";
import Subscription from "./pages/SubscriptionPlans/Subscription";
import path from "path";
import Settings from "./pages/Settings/Settings";
import Profile from "./pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>, 
    // errorElement: <NotFound/>
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "contact",
        element: <Contact/>,
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "signup",
        element: <Signup/>,
      },
      {
        path: "forgot",
        element: <ForgotPassword/>,
      },
      {
        path: "subscription",
        element: <Subscription/>,
      },
      {
        path: "settings",
        element: <Settings/>,
      },
      {
        path:"profile",
        element: <Profile/>,
      }
    ]
  },
  {
    path: "/user",
    element: <Auth/>,
    // errorElement: <NotFound/>
  }
])

export default router