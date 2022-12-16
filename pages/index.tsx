import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>13&apos;s Portfolio</title>
      </Head>

      <Header />

      <section id="hero">
        <Hero />
      </section>
    </div>
  );
};

export default Home;
