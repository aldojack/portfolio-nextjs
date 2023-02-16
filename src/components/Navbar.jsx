import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState('#1f2937')
  const router = useRouter();

  useEffect(() => {
    if(
      router.asPath === '/Property' || 
      router.asPath === '/Crypto' || 
      router.asPath === '/Netflix' || 
      router.asPath === '/Twitch'
      ){
        setNavBg('transparent')
      } else{
        setNavBg('#1f2937')
      }
  },[router])

  function handleNav() {
    setNav(!nav);
  }

  // bg-[#1f2937]
  return (
    <div style={{backgroundColor: `${navBg}`}}
      className={"fixed top-0 w-full h-24 shadow-xl z-[100] pt-4"}
    >
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Link href="/">
          <Image src="/assets/navLogoAJ1.png" alt="" width="170" height="50" />
        </Link>
        <nav>
          <ul className="hidden md:flex">
            <Link href="/#home">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#FF7F50] ease-in duration-300">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#FF7F50] ease-in duration-300">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#FF7F50] ease-in duration-300">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#FF7F50] ease-in duration-300">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#FF7F50] ease-in duration-300">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={35} />
          </div>
        </nav>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/80" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#1f2937] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
          <Link href="/">
            <Image src="/assets/navLogoAJ1.png" alt="" width="87" height="35" />
          </Link>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg p-3 cursor-pointer bg-red-500 hover:bg-red-600"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-[#FF7F50] my-4">
            <p className="w-[85%] md:w-[90%] oy-4">Always developing</p>
          </div>
          <nav className="py-4 flex flex-col">
            <ul>
              <Link href="/#home">
                <li onClick={() => setNav(false)} className="py-4 text-sm hover:text-[#FF7F50] ease-in duration-300">Home</li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm hover:text-[#FF7F50] ease-in duration-300">About</li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm hover:text-[#FF7F50] ease-in duration-300">Skills</li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm hover:text-[#FF7F50] ease-in duration-300">Projects</li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm hover:text-[#FF7F50] ease-in duration-300">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="tracking-widest text-[#FF7F50]">Lets Connect</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
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
          </nav>
        </div>
      </div>
    </div>
  );
}
