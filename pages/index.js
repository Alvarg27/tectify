import Head from "next/head";
import Technologies from "../components/Technologies";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TextSection from "../components/TextSection";
import Speed from "../components/Speed";
import MobileFirst from "../components/MobileFirst";
import Security from "../components/Security";

export default function Home({ offsetY }) {
  return (
    <div>
      <Hero />
      <TextSection offsetY={offsetY} />
      <Services offsetY={offsetY} />
      <Technologies />
      <Speed />
      <MobileFirst />
      <Security />
    </div>
  );
}
