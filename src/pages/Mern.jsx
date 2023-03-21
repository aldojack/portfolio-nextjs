import Image from "next/image";
import React from "react";
import MernLogo from "/public/assets/projects/mern.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

export default function MERN() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-[#1f2937]/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          alt=""
          src={MernLogo}
          style={{objectFit: "cover"}}
          priority
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className="py-2">MERN App</h2>
          <h3>ReactJS / MongoDB / Express / Node / Tailwind</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#FF7F50]">
            Project
          </p>
          <h2>Overview</h2>
          <div>
            <p className="bg-[#FF7F50] text-black">This is still a work in progress</p>
          </div>
          <div className="space-y-4">
          <p>The goal of this project was to enhance the existing website of a tech consultancy firm by adding interactive and engaging elements to suggest potential career paths to users. To achieve this, three games (2048, matching pairs, and blackout) were designed, each representing a potential career path with aligned skills. These games had to be completed within 2 minutes and included a weighted scoring system that would calculate the user&apos;s career path based on their performance.</p>
          
          <p>To access the games, users could register and log in using JWT tokens, which were managed on the backend using Express and MongoDB. On the frontend, React and Tailwind were used to design and display the games, as well as the user registration and login forms.</p>
          
          <p>Overall, this project aimed to &ldquo;gameify&rdquo; the consultancy firm&apos;s website to create a more interactive and engaging experience for users, while also helping them discover potential career paths based on their skills and performance in the games.</p>
          </div>
          <button className="px-8 py-2 mt-4 mr-8 cursor-not-allowed">
            Demo Coming Soon
          </button>

          <Link href="https://github.com/aldojack/FDM-Pathways">
            <button className="px-8 py-2 mt-4 mr-8">GitHub</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-900 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technlogies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 text-[#FF7F50]" />
                React
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 text-[#FF7F50]" />
                Tailwind
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 text-[#FF7F50]" />
                Express
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 text-[#FF7F50]" />
                MongoDB
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 text-[#FF7F50]" />
                Node
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer hover:text-[#FF7F50]">Back</p>
        </Link>
      </div>
    </div>
  );
}
