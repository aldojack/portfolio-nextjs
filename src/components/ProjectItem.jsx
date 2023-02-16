import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProjectItem({title, backgroundImg, projectUrl}) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-900 rounded-xl p-4 group hover:bg-gradient-to-r from-[#f85f28c8] to-[#a5c9fca9]">
    <Image className="rounded-xl group-hover:opacity-25" src={backgroundImg} alt=""/>
    <div className="hidden group-hover:flex absolute flex-col justify-center items-center text-black">
        <h3 className="text-2xl tracking-wider">{title}</h3>
        <p className="pb-4 pt-2">React JS</p>
        <Link href={projectUrl}><p className="p-3 rounded-lg bg-white text-black text-lg font-bold cursor-pointer">More Info</p></Link>
    </div>
</div>
  )
}
