import React, { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./header/Header";

export default function Layout({ children }) {
  return (
    <div className="w-full relative">
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
      <Header />
      {children}
      <div className="h-[50px] "></div>
      <Footer />
    </div>
  );
}
