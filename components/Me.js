import Link from 'next/link';
import React from 'react'
import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
      <div id="me" className=" w-full ">
        
        <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
      <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-red-600 font-bold">
        me
      </h2>
      <div className=" shadow-xl shadow-blue-300 my-8 px-8">
        {/* <p className="py-4 max-w-2xl mx-auto">
            Nepenthe above my pallas of rapping guessing shore. Then chamber
            midnight nevermore nevermore. Dared pallas nothing door me oer
            myself so, name streaming door back beguiling was unseen at,
            evilprophet is than burden little the and me at, there above heaven
            in more no, nevermore sinking fowl the door oer.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            Nepenthe above my pallas of rapping guessing shore. Then chamber
            midnight nevermore nevermore. Dared pallas nothing door me oer
            myself so, name streaming door back beguiling was unseen at,
            evilprophet is than burden little the and me at, there above heaven
            in more no, nevermore sinking fowl the door oer.
          </p> */}
          <p className="py-4 max-w-2xl mx-auto">
           My namae is khizar ahmad and i am doing bachelors in software engineering 
           from university of agriculture faisalabad i am a front-end developer i have good command on technologies
           like react, nextjs, tailwind css. i am currently learning web 3, AI and bllockchain at PIAIC 
          </p>
      </div>
      <div className="flex items-center justify-center gap-10">
        <Link href="/Resume.pdf" download={true}>
        <div className="group flex  bg-red-600 text-white items-center justify-center px-6 py-2 font-bold uppercase rounded-md tracking-wider my-3 cursor-pointer">
            resume
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25}/>
            </span>
          </div>
            </Link>
            <Link href="/#portfolio" download={true}>
        <div className="group flex bg-red-600 text-white items-center justify-center px-6 py-2 font-bold uppercase rounded-md tracking-wider my-3 cursor-pointer">
            portfolio
            <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
              <MdExpandMore size={25}/>
            </span>
          </div>
            </Link>
      </div>
    </div>
    </div>
  )
}

export default Me