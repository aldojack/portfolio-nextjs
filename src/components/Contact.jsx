import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import ContactImg from "/public/assets/doggys.jpg";

export default function Contact() {
  return (
    <section id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-6 py-16 w-full">
        <p className="uppercase text-xl tracking-widest text-[#FF7F50]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-900 rounded-xl p-4">
            <div className="lg:-p-4 h-full flex flex-col justify-evenly items-center">
              <div>
                <Image
                  src={ContactImg}
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  alt="contact logo"
                  width="250"
                />
              </div>
              <div className="py-2">
                <h2>Alan Jack</h2>
                <p>Developer <span className="text-xs">(and animal lover 🐶🐶)</span></p>
                <p>Feel free to contact me</p>
              </div>
              <div>
                <p className="uppercase text-center">Connect with me</p>
                <div className="flex items-center justify-between py-4 gap-8">
                  <div className="rounded-full shadow-lg shadow-gray-700 hover:shadow-custom p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-700 hover:shadow-custom p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-700 hover:shadow-custom p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-700 hover:shadow-custom p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-900 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Phone Number</label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Email</label>
                <input
                      type="email"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                </div>
                <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Subject</label>
                <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                </div>
                <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Message</label>
                <textarea
                      className="border-2 rounded-lg p-3 border-gray-300"
                      rows="10"
                    />
                </div>
                <button className="w-full p-4 mt-4">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
        <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-700 hover:shadow-custom p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp className="m-auto " size={30}/>
            </div>
        </Link>
        </div>
      </div>
    </section>
  );
}
