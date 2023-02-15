import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Main() {
  return (
    <header id="header" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-wide text-[#D6D6D6]">
            Lets build something together
          </p>
          <h1 className="py-4">
            Hi, I&apos;m{" "}
            <span className="text-[#FF7F50] font-extrabold underline underline-offset-4">
              Alan
            </span>
          </h1>
          <h1 className="py-4">A Web & Mobile Developer</h1>
          <p className="py-4 text-[#D6D6D6] max-w-[70%] m-auto">
            I&apos;m a Web & Mobile developer with a particular focus on
            Javascript Technlogies. My current focus is using Next.js to build
            React applications using Tailwind CSS for styling
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 hover:shadow-custom p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 hover:shadow-custom p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 hover:shadow-custom p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 hover:shadow-custom p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
