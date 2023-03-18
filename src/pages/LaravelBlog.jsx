import Image from "next/image";
import React from "react";
import LaravelLogo from "/public/assets/skills/Laravel-Logo.wine.png";
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
          src={LaravelLogo}
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className="py-2">Laravel Blog</h2>
          <h3>PHP / Laravel / SQL / Tailwind / Socialite</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#FF7F50]">
            Project
          </p>
          <h2>Overview</h2>
          <div>
            <p className="bg-[#FF7F50] text-black">
              This is still a work in progress
            </p>
          </div>
          <div className="space-y-4">
            <p>
            This project is a mental health blog site built with Laravel, a popular PHP web framework that follows the Model-View-Controller (MVC) architecture. The project includes a robust authentication and authorization system for both regular users and admin users. Additionally, the site utilises Laravel&apos;s Eloquent ORM, a powerful database abstraction layer that makes it easy to work with databases.
            </p>

            <p>
            The code demonstrates many of the best practices of Laravel development. The use of the MVC architecture, coupled with Eloquent, ensures that the code is easy to maintain and extend. The project also features a clean and intuitive user interface, making it easy for visitors to navigate and read the blog content.
            </p>

            <p>
            Overall this project is an  example of how to build a robust and scalable blog site using Laravel. The project&apos;s use of MVC architecture, Eloquent ORM, OAuth, authentication and authorisation features make it a valuable resource for developers looking to learn more about these topics.
            </p>
          </div>
          <button className="px-8 py-2 mt-4 mr-8 cursor-not-allowed">
            Demo Coming Soon
          </button>

          <Link href="https://github.com/aldojack/laravel-cms">
            <button className="px-8 py-2 mt-4 mr-8">GitHub</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-900 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technlogies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 text-[#FF7F50]" />
                PHP
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 text-[#FF7F50]" />
                MVC
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 text-[#FF7F50]" />
                Laravel
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 text-[#FF7F50]" />
                MySQL
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 text-[#FF7F50]" />
                Tailwind
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 text-[#FF7F50]" />
                Socialite/OAuth
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
