import { Html, Head, Main, NextScript } from "next/document";
import Footer from "../components/Footer";

export default function Document() {
  return (
    <Html className="no-js" lang="en">
      <Head/>
      <body id="top">
        <div>
          <div id="preloader">
            <div id="loader" className="dots-fade">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <Main />
        </div>
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
