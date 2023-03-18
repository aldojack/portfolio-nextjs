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
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.alan-jack.co.uk" />
        <meta property="og:title" content="Alan Jack - BSc Hons Web & Mobile Developer" />
        <meta property="og:description" content="This is my portfolio website built with Next.js 13, showcasing my projects and skills in web development." />
        <meta property="og:image" content="https://www.alan-jack.co.uk/assets/navLogoAJ.png" />
        <meta property="og:image:alt" content="A logo created using my initals" />
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
