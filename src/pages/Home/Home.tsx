import ExclusiveOffers from "../../components/sections/ExclusiveOffers";
import HeroSection from "../../components/sections/HeroSection";
import HowItWorks from "../../components/sections/HowItWorks";
import Partners from "../../components/sections/Partners";
import StatsSection from "../../components/sections/StatsSection";
// import Layout from "@/Layouts/Layout";

// Home page — just renders each section once
const Home = () => {
  return (
    <>
   
      
      <HeroSection />       {/* أول section */}
      <HowItWorks />        {/* ثاني section */}
      <Partners />          {/* ثالث section */}
      <ExclusiveOffers />   {/* رابع section */}
      <StatsSection />      {/* خامس section */}
  
    </>
  );
};

export default Home;