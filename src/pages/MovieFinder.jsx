import Image from "next/image";
import React from "react";
import movieImg from "/public/assets/projects/movies.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

export default function MovieFinder() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-[#1f2937]/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          style={{ objectFit: "cover" }}
          alt=""
          src={movieImg}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className="py-2">Movie Finder</h2>
          <h3>HTML / CSS / Javascript</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#FF7F50]">
            Project
          </p>
          <h2>Overview</h2>
          <p>
            The movie finder project is a web development project that utilises
            HTML, Vanilla JavaScript, and CSS. The project was inspired by this{" "}
            <a
              href="https://www.figma.com/file/jhFRdFIdHpRxsDznNXtpXw/Movie-Watchlist?node-id=2-17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF7F50] hover:underline"
            >
              Figma
            </a>
            {" "}design and consists of two pages: the index page and the watchlist
            page. The primary requirements for the project include the ability
            to search for movies using the Fetch API to communicate with the
            OMDB API, the ability to favorite items that are saved to local
            storage, and the ability to receive the favorited items from local
            storage on the watchlist page. The project also includes a
            responsive web design, allowing it to adapt to various screen sizes
            and devices. Overall, the project serves as a functional and
            user-friendly movie finder that is visually appealing and intuitive
            to use
          </p>
          <p className="mt-4">
            Lastly and seperate from the project I was particularly pleased with the{" "}
            <a
              href="https://github.com/aldojack/Movie-Watchlist/blob/master/src/utillity.js"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF7F50] hover:underline"
            >
            utillity.js
            </a>
            {" "}function I created. My reasoning behind doing this was the amount of
            repeating of create element and I also didn&apos;t like the approach
            others would use with inner HTML or HTML content. By abstracting
            away some of the complexity of creating and setting attributes on
            new DOM elements, your function makes it easier and faster to create
            dynamic, interactive web pages. Plus, the ability to specify
            multiple attributes at once using an options object is a great way
            to improve code maintainability and reduce repetition.
          </p>
          <Link href="https://aldojack.github.io/Movie-Watchlist/">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>

          <Link href="https://github.com/aldojack/Movie-Watchlist">
            <button className="px-8 py-2 mt-4 mr-8">GitHub Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-900 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technlogies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 text-[#FF7F50]" />
                HTML5
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 text-[#FF7F50]" />
                CSS3
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 text-[#FF7F50]" />
                Javascript
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 text-[#FF7F50]" />
                Open Movie DB API
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
