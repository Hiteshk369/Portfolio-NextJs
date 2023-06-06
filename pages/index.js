import Head from "next/head";
import LandingPage from "../components/LandingPage";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Hitesh</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingPage />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
