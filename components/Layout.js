import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const [displayLayout, setDisplayLayout] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    if (router.pathname === "TCtTSHWeHC") {
      setDisplayLayout(false);
    } else {
      setDisplayLayout(true);
    }
  }, [router.pathname]);
  return (
    <>
      {router.pathname && (
        <div lang="es">
          <Head>
            <title>tectify</title>
            <meta
              name="facebook-domain-verification"
              content="4ot8tuaepxjdmvfqgbcq02eqx1tk6i"
            />

            <meta
              name="description"
              content="Soluciones tecnológicas para el futuro"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            ></meta>
            <link rel="icon" href="/tectify-icon.webp" />
          </Head>
          {displayLayout && <Header />}
          {children}
          {displayLayout && <Footer />}
        </div>
      )}
    </>
  );
}
