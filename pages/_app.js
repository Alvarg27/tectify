import { LanguageProvider } from "context/LanguageProvider";
import { PageOffsetProvider } from "context/PageOffsetProvider";
import { ThemeProvider } from "context/ThemeProvider";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    console.log(
      "%cPowered by %ctectify",
      "color: lightgrey; font-family:helvetica; font-size: 18px ;",
      "color: rgb(29,78,216); font-family:helvetica; font-size: 38px ; font-weight: bold;"
    );
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded ? (
        <PageOffsetProvider>
          <ThemeProvider>
            <LanguageProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </LanguageProvider>
          </ThemeProvider>
        </PageOffsetProvider>
      ) : null}
    </>
  );
}

export default MyApp;
