import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div>
    <Navbar/>

      {/* هنا بيتعرض Home / About / Contact */}
      <Outlet />

      <Footer/>
    </div>
  );
};

export default MainLayout