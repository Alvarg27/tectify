import DescriptionCards from "components/DescriptionCards/DescriptionCards";
import Hero from "components/Hero/Hero";
import Showcase from "components/Showcase/Showcase";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <DescriptionCards />
      <Showcase />
    </div>
  );
}
