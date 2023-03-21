import Image from "next/image";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import MovieFinderImg from "/public/assets/projects/movies.png";
import QuizImg from "/public/assets/projects/quiz.png";
import DeliveryLogo from "/public/assets/projects/delivery-logo.png";
import HonsImg from "/public/assets/projects/hons.png";
import LaravelImg from "/public/assets/skills/Laravel-Logo.wine.png";
import MernImg from "/public/assets/projects/mern.jpg";


export default function Projects() {
  return (
    <section id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-6 py-16">
        <p className="uppercase text-xl tracking-widest text-[#FF7F50]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Movie Finder"
            description="Movie App developed using plain JS, HTML and CSS"
            backgroundImg={MovieFinderImg}
            projectUrl="/MovieFinder"
          />
          <ProjectItem
            title="Quiz App"
            description="First ReactJS project developed, this is a quiz app"
            backgroundImg={QuizImg}
            projectUrl="/Quiz"
          />
          <ProjectItem
            title="Delivery App"
            description="Progressive Web Application using React, Tailwind and Camera and Location APIs"
            backgroundImg={DeliveryLogo}
            projectUrl="/Delivery"
          />
          <ProjectItem
            title="Honours Research"
            description="Honours Research tasked to develop two applications in React + Vue and comparing performance using Google Lighthouse"
            backgroundImg={HonsImg}
            projectUrl="/Hons"
          />
          <ProjectItem
            title="Mental Health Blog"
            description="CMS mental health blog website using Laravel (Demo coming soon)"
            backgroundImg={LaravelImg}
            projectUrl="/LaravelBlog"
          />
          <ProjectItem
            title="Find Your Perfect Pathway"
            description="Full Stack MERN project designed for a tech consultancy and helping customer choose a career in tech (Demo coming soon)"
            backgroundImg={MernImg}
            projectUrl="/Mern"
          />
        </div>
      </div>
    </section>
  );
}
