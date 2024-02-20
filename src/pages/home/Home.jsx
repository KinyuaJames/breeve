import "./home.css";
import Mainheader from "../../components/Mainheader";
import { About, Lessons, Contact } from "../../pages";
import { Pricing, Testimonials, Footer } from "../../components";

const Home = () => {
  return (
    <div>
      <div>
        <Mainheader />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Lessons />
      </div>
      <div>
        <Pricing />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
