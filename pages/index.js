import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TextSection from "../components/TextSection";

export default function Home({ offsetY }) {
  return (
    <div>
      <Hero />
      <TextSection offsetY={offsetY} />
      <Services offsetY={offsetY} />
    </div>
  );
}
