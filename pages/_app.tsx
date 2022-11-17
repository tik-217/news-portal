import { useEffect } from "react";

// general styles
import "../styles/base.css";
import "../styles/globals.css";
import "../styles/vendor.css";

import type { AppProps } from "next/app";
import Head from "next/head";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  function loaderToggle() {
    const html = document.querySelector("html") as HTMLElement;
    html.classList.remove("no-js");
    html.classList.add("ss-preload");
  }

  useEffect(() => {
    window.addEventListener("load", loaderToggle);

    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 300,
      once: true,
      disable: "mobile",
    });

    return () => {
      window.addEventListener("load", () => {
        const html = document.querySelector("html") as HTMLElement;
        html.classList.remove("ss-preload");
        html.classList.add("no-js");
      });
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700|Nunito+Sans:300,400,400i,600,600i,700,700i,800" />
        <link href="font-awesome/css/fontawesome-all.css" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
