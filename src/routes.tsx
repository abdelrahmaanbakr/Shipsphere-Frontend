import { createBrowserRouter } from "react-router-dom";
import Auth from "./Layouts/Auth";
import MainLayout from "./Layouts/MainLayout";
import About from "./pages/About/About";
import Billing from "./pages/Billing/Billing";
import Compare from "./pages/Compare/Compare";
import Contact from "./pages/Contact/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
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
    ]
  },
  {
    path: "/user",
    element: <Auth/>,
    // errorElement: <NotFound/>
    children: [
      {
        index: true,
        element: <Dashboard/>
      },
      {
        path: "billing",
        element: <Billing/>,
      },
      {
        path: "compare",
        element: <Compare/>,
      },
      {
        path: "profile",
        element: <Profile/>,
      },
      {
        path: "settings",
        element: <Settings/>,
      },
      {
        path:"subscription",
        element: <Subscription/>
      }
    ]
  }
])

export default router