import Image from "next/image";
import React from "react";
import HonsLogo from "/public/assets/projects/hons.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

export default function Honours() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-[#1f2937]/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          alt=""
          src={HonsLogo}
          style={{objectFit: "cover"}}
          priority
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className="py-2">Honours Research</h2>
          <h3>ReactJS / VueJs / Tailwind / Google Lighthouse / Puppeteer</h3>
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
          <p>The Honours-Project repository contains two single-page applications, built with React and Vue.js respectively, that act as recipe managers. The applications leverage their respective routers and utilise code splitting to improve performance. The aim of the project was to compare the performance of these two popular JavaScript frameworks using Google Lighthouse metrics.</p>
          
          <p>Both the React and Vue.js versions of the recipe manager applications generate recipes from a vanilla JavaScript file and save them to local storage. To gather data for the comparison, the project includes an automated testing script that runs daily for a month and collects metrics for adding 1, 100, and 1000 items to the recipe list. The results are then compiled into an Excel spreadsheet to be analysed in the dissertation.</p>
          
          <p>The code for the project is well-structured and easy to follow, making it a valuable resource for developers interested in learning more about performance testing and comparison of React and Vue.js applications. The Honours Project repository is an excellent example of how to conduct meaningful research on the performance of web applications and showcases the best practices for creating single-page applications with code splitting to improve performance.</p>
          </div>
          <Link href="https://recipe-man-react.netlify.app/">
            <button className="px-8 py-2 mt-4 mr-8">React Demo</button>
          </Link>

          <Link href="https://recipe-man-vue.netlify.app/">
            <button className="px-8 py-2 mt-4 mr-8">Vue Demo</button>
          </Link>

          <Link href="https://github.com/aldojack/Honours-Project">
            <button className="px-8 py-2 mt-4 mr-8">GitHub Code</button>
          </Link>

          <Link href="https://github.com/aldojack/AutomationTesting">
            <button className="px-8 py-2 mt-4 mr-8">Automation Script GitHub</button>
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
                React Router
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 text-[#FF7F50]" />
                Tailwind
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 text-[#FF7F50]" />
                Vue
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 text-[#FF7F50]" />
                Vue Router
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 text-[#FF7F50]" />
                Google Lighthouse
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 text-[#FF7F50]" />
                Puppeteer
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 text-[#FF7F50]" />
                Excel.Js
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
