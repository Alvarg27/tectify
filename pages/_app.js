import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Layout offsetY={offsetY}>
      <Component {...pageProps} offsetY={offsetY} />
    </Layout>
  );
}

export default MyApp;
