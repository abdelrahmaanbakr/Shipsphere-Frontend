import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="grow pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
