
import Navbar from "@/Components/Bars/Navbar";
import Slider from "@/app/Home/Slider";
import Service from "@/app/Home/Service";
import Agency from "./Home/Agency";
import Counter from "./Home/Counter";
import Projects from "./Home/Projects";
import Pricing from "./Home/Pricing";
import Review from "./Home/Review";
import NewsLetter from "./Home/NewsLetter";
import Footer from "@/Components/Bars/Footer";
import Contact from "./Home/Contact";
import Team from "./Home/Team";
export default function Home() {
  return (
    <main >
      <Navbar />
      <Slider />
      <Service />
      <Agency />
      <Counter />
      <Projects />
      <Pricing />
      <Team />
      <Review />
      <NewsLetter />
      <div className="pt-100">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
