import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Subscription from "@/pages/SubscriptionPlans/Subscription";
import Settings from "@/pages/Settings/Settings";
import Profile from "@/pages/Profile/Profile";
const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Outlet  />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;