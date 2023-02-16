import Image from "next/image";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import MovieFinderImg from "/public/assets/projects/movies.png";
import QuizImg from "/public/assets/projects/quiz.png";
import NetflixImg from "/public/assets/projects/netflix.jpg";
import TwitchImg from "/public/assets/projects/twitch.jpg";

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
            backgroundImg={MovieFinderImg}
            projectUrl="/MovieFinder"
          />
          <ProjectItem
            title="Quiz App"
            backgroundImg={QuizImg}
            projectUrl="/Quiz"
          />
          {/* <ProjectItem
            title="Netflix Clone"
            backgroundImg={NetflixImg}
            projectUrl="/Netflix"
          />
          <ProjectItem
            title="Twitch Clone"
            backgroundImg={TwitchImg}
            projectUrl="/Twitch"
          /> */}
        </div>
      </div>
    </section>
  );
}
