import Image from "next/image";
import React from "react";
import DeliveryLogo from "/public/assets/projects/delivery-logo.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

export default function Delivery() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-[#1f2937]/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          alt=""
          src={DeliveryLogo}
          style={{objectFit: "cover"}}
          priority
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className="py-2">Delivery App</h2>
          <h3>ReactJS / Camera API / Geolocation API</h3>
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
          <p>The Delivery App project is a React progressive web application that simulates the workflow of a delivery driver. The app utilises the browser&apos;s location and camera APIs to provide users with a seamless delivery experience. </p>
          
          <p>The application allows drivers to accept deliveries, navigate to the delivery location, and take a picture of the delivery location to confirm the delivery. The app is designed to work on both desktop and mobile devices, and  offer offline support to provide a smooth and reliable user experience.</p>
          
          <p>One of the standout features of the Delivery-App project is its use of location and camera APIs, which enable users to easily navigate to delivery locations and provide visual confirmation of deliveries. The code for this functionality is well-organised using reuseable components and easy to follow, making it a great example of how to use browser APIs to create powerful and an engaging progressive web application</p>
          </div>
          <Link href="https://pinpoint-delivery.netlify.app/">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>

          <Link href="https://github.com/aldojack/Delivery-App">
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
