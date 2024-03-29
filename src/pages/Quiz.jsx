import Image from "next/image";
import React from "react";
import quizImg from "/public/assets/projects/quiz.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

export default function Quiz() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-[#1f2937]/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          alt=""
          src={quizImg}
          style={{objectFit: "cover"}}
          priority
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className="py-2">Quiz</h2>
          <h3>ReactJS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#FF7F50]">
            Project
          </p>
          <h2>Overview</h2>
          <div className=" space-y-4">
          <p>
          The Quiz App project is a web application built using React and JSX that allows users to take a multiple-choice quiz on a variety of topics with a choice of difficulty. The project features a clean and user-friendly interface, with a landing page that provides an overview of the quiz and a button to begin the quiz.</p>
          
          <p>The quiz questions and answer choices are dynamically generated using the opentdb API, which provides a wealth of questions on a variety of topics. Once the user starts the quiz, they are presented with a series of questions, each with four possible answers. Users can select one answer for each question, and they are not able to change their answer once it has been submitted. After answering all of the questions, users are presented with a summary of their results, including the number of questions answered correctly and incorrectly, as well as their overall score as a percentage.</p>
          
          <p>One of the standout features of this project is its use of React and JSX to create reusable components that make it easy to manage and update the user interface. The code for this functionality is well-organized and easy to follow, making it a great example of how to build complex, interactive web applications using modern web development techniques.
          </p>
          </div>
          <Link href="https://aldo-quiz.netlify.app/">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>

          <Link href="https://github.com/aldojack/quiz-app">
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
                CSS
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 text-[#FF7F50]" />
                Javascript
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 text-[#FF7F50]" />
                Open Trivia DB API
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
