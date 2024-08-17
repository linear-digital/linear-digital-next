
import Navbar from "@/Components/Bars/Navbar";
import Slider from "@/app/Home/Slider";
import Agency from "./Home/Agency";
import Counter from "./Home/Counter";
import Projects from "./Home/Projects";
import Pricing from "./Home/Pricing";
import Review from "./Home/Review";
import NewsLetter from "./Home/NewsLetter";
import Footer from "@/Components/Bars/Footer";
import Contact from "./Home/Contact";
import Team from "./Home/Team";
import Services_Ab from "./about/_ui/Services_Ab";
import ClientData from "./pricing/_ClientData/ClientData";
export default function Home() {
  return (
    <main >
      <Navbar />
      <Slider />
      <Services_Ab />
      {/* <Service /> */}
      {/* <Agency /> */}
      <Counter />
      <Projects />
      <Pricing />
      <Team />
      <Review />
      <ClientData page="home"/>
      <div className="pt-100">
        <Contact />
      </div>
      <NewsLetter />
      <Footer />
    </main>
  );
}
