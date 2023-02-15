import Image from "next/image";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import PropertyImg from "/public/assets/projects/property.jpg";
import CryptoImg from "/public/assets/projects/crypto.jpg";
import NetflixImg from "/public/assets/projects/netflix.jpg";
import TwitchImg from "/public/assets/projects/twitch.jpg";

export default function Projects() {
  return (
    <section id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#FF7F50]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg={PropertyImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Crypto"
            backgroundImg={CryptoImg}
            projectUrl="/crypto"
          />
          <ProjectItem
            title="Netflix Clone"
            backgroundImg={NetflixImg}
            projectUrl="/netflix"
          />
          <ProjectItem
            title="Twitch Clone"
            backgroundImg={TwitchImg}
            projectUrl="/twitch"
          />
        </div>
      </div>
    </section>
  );
}
