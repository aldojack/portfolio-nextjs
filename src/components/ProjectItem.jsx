import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProjectItem({title, description, backgroundImg, projectUrl}) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-900 rounded-xl p-4 group hover:bg-orange-300">
    <Image className="rounded-xl group-hover:opacity-25" src={backgroundImg} alt=""/>
    <div className="hidden group-hover:flex absolute flex-col justify-center items-center text-black">
        <h3 className="text-2xl tracking-wider">{title}</h3>
        <p className="mx-6 pb-4 pt-2">{description}</p>
        <Link href={projectUrl}><p className="p-3 rounded-lg bg-white text-black text-lg font-bold cursor-pointer">More Info</p></Link>
    </div>
</div>
  )
}
