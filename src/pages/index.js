import Head from "next/head";
import { Inter } from "@next/font/google";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="wrapper">
      <Head>
        <title>Alan Jack - Developer</title>
        <meta property="og:title" content="Alan Jack - Bsc Web & Mobile Developer" />
        <meta property="og:description" content="This is my portfolio website built with Next.js 13, showcasing my projects and skills in web development." />
        <meta property="og:image" content="/skills/navLogoAJ.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image.ico" />
      </Head>
      <Main />
      <About />
      <Skills /> 
      <Projects />
      <Contact />
    </div>
  );
}
