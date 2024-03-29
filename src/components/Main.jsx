import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Main() {
  return (
    <header id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-wide text-[#D6D6D6]">
            Always developing
          </p>
          <h1 className="py-4">
            Welcome, I&apos;m{" "}
            <span className="text-[#FF7F50] font-extrabold underline underline-offset-4">
              Alan
            </span>
          </h1>
          <h1 className="py-4">A Web & Mobile Developer</h1>
          <div className="text-[#D6D6D6] max-w-[70%] m-auto space-y-4">
            <p>
              I&apos;m a Web & Mobile developer with a particular focus on
              Javascript Technlogies. My current focus is using Next.js to build
              React applications using Tailwind CSS for styling
            </p>

            <p>
            This project was developed using Next.js and and hosted using AWS Amplify
            </p>
          </div>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 hover:shadow-custom p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="https://www.linkedin.com/in/alan-jack/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 hover:shadow-custom p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="https://github.com/aldojack"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 hover:shadow-custom p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail className=" cursor-not-allowed" />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 hover:shadow-custom p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill className=" cursor-not-allowed" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
