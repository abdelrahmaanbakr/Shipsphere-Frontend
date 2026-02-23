import HeroSection     from "../../components/sections/HeroSection";
import HowItWorks      from "../../components/sections/HowItWorks";
import Partners        from "../../components/sections/Partners";
import ExclusiveOffers from "../../components/sections/ExclusiveOffers";
import StatsSection    from "../../components/sections/StatsSection";

// Home page — just renders sections in order
const Home = () => {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <Partners />
      <ExclusiveOffers />
      <StatsSection />
    </>
  );
};

export default Home;

