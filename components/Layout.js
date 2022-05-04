import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div lang="es">
      <Head>
        <title>tectify</title>
        <meta
          name="description"
          content="Soluciones tecnológicas para el futuro"
        />
        <link rel="icon" href="/tectify-icon.webp" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
