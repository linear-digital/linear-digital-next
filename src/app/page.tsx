
import Navbar from "@/Components/Bars/Navbar";
import Slider from "@/app/Home/Slider";
import Service from "@/app/Home/Service";
import Agency from "./Home/Agency";
export default function Home() {
  return (
    <main >
      <Navbar />
      <Slider />
      <Service />
      <Agency />
    </main>
  );
}
