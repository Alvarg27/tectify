import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { Html } from "next/document";

export default function Layout({ children }) {
  return (
    <Html lang="es">
      <Head>
        <title>tectify</title>
        <meta
          name="description"
          content="Soluciones tecnológicas para el futuro"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </Html>
  );
}
