import React from 'react'
// import heroImage from '../public/assets/heroImage.png'
import myimage from '../public/assets/linkedinprofile.png'
import cover from "../public/assets/portfolio/alexandru-acea-XEB8y0nRRP4-unsplash.jpg";
import Image from 'next/image'
import {MdExpandMore} from 'react-icons/md'
import Link from 'next/link'
const Homepage = () => {
  return (
    <div className=" h-screen media bg-gray-200   text-center w-auto">
      <div className="max-w-screen-xl media h-full w-full pt-24  p-4 flex flex-col items-center mx-auto ">
        <div className="w-64 h-64  overflow-hidden rounded-lg  mx-auto">
          <Image src={myimage}  alt='me'/>
        </div>
        <h1 className="uppercase font-bold text-gray-800 text-5xl">full stack developer</h1>
         <p className="text-gray-800 text-xl max-w-sm mx-auto">
          I have 2 years of self experience building and desgining software.
          Currently, I love to work on web application using technologies like
          React, Tailwind, Next JS,Shadcn ui and GraphQL.
        </p>
        <Link href="/#me">
          <div className="group flex bg-gray-800 hover:bg-slate-700 transition-all ease-in
          text-white justify-center px-6 py-2 font-bold uppercase rounded-md tracking-wider my-3">
            know more
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25}/>
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Homepage
