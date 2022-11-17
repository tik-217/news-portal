import Head from "next/head";

// components
import Slider from "../components/Slider";
import Articles from "../components/Aricles";
import Extra from "../components/Extra";

export default function Home() {
  return (
    <>
      <Head>
        <title>Three Word</title>
      </Head>

      <Slider />
      <Articles />
      <Extra />
    </>
  );
}
