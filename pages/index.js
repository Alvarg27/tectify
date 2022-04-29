import Head from "next/head";
import Technologies from "../components/Technologies";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TextSection from "../components/TextSection";
import Speed from "../components/Speed";

export default function Home({ offsetY }) {
  return (
    <div>
      <Hero />
      <TextSection offsetY={offsetY} />
      <Services offsetY={offsetY} />
      <Technologies />
      <Speed />
    </div>
  );
}
