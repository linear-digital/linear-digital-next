
import Navbar from "@/Components/Bars/Navbar";
import Slider from "@/app/Home/Slider";
import Service from "@/app/Home/Service";
import Agency from "./Home/Agency";
import Counter from "./Home/Counter";
import Projects from "./Home/Projects";
import Pricing from "./Home/Pricing";
import Review from "./Home/Review";
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
      <Review />
    </main>
  );
}
