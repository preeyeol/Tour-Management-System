import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePage from "./HomePage";

const Hero = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <HomePage />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Hero;
