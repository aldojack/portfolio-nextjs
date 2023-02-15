import Image from "next/image";
import SkillItem from '@/components/SkillItem'

export default function Skills() {
  return (
    <section id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full space-y-2">
        <p className="uppercase text-xl tracking-widest text-[#FF7F50]">
          Skills
        </p>
        <h2>What I know</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillItem name="HTML" src="/assets/skills/html.png" />
          <SkillItem name="CSS" src="/assets/skills/css.png" />
          <SkillItem name="JavaScript" src="/assets/skills/javascript.png" />
          <SkillItem name="Tailwind" src="/assets/skills/tailwind.png" />
          <SkillItem name="React" src="/assets/skills/react.png" />
          <SkillItem name="Vue" src="/assets/skills/vuejs.png" />
          <SkillItem name="Next.js" src="/assets/skills/nextjs.png" />
          <SkillItem name="C#" src="/assets/skills/c-logo-icon-28402.png" />
          <SkillItem name="GitHub" src="/assets/skills/github-icon-1-logo-svgrepo-com.png" />
          <SkillItem name="AWS" src="/assets/skills/aws.png" />
          <SkillItem name="Laravel" src="/assets/skills/output-onlinepngtools.png" />
          <SkillItem name="MongoDB" src="/assets/skills/mongo.png" />

        </div>
      </div>
    </section>
  );
}
