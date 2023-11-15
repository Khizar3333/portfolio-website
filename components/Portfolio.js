import React from 'react'
import { MdExpandMore } from "react-icons/md";

import installNode from "../public/assets/portfolio/installNode.jpg";
import reactParallax from "../public/assets/portfolio/reactParallax.jpg";
import usestate from "../public/assets/portfolio/usestate.jpg";
import reactWeather from "../public/assets/portfolio/reactWeather.jpg";
import Todolist from "../public/assets/portfolio/Todolist.png";
import blog from "../public/assets/portfolio/blog.png"
import currencycon from "../public/assets/portfolio/currencyconverter.png"
import tictactoe from "../public/assets/portfolio/tictactoe.png"
import Link from "next/link";
import Image from "next/image";
const Portfolio = () => {
    const portfolios = [
        {
          id: 1,
          title: "Todo list",
          imageSrc: Todolist,
          url: "Todolist",
          
          
        },
        {
          id: 2,
          title: "tic tac toe",
          imageSrc: tictactoe,
          url: "tictactoe",
        },
        {
          id: 3,
          title: "Blog",
          imageSrc: blog,
          url: "blog",
        },
        {
          id: 4,
          title: "currency converter",
          imageSrc: currencycon,
          url: "currencycon",
        },
      ];
  return (
    <div id="portfolio" className="w-full">
    <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
      <h2 className="text-5xl md:text-7xl tracking-wider uppercase  font-bold">
        portfolio
      </h2>
      <p className="py-4 max-w-lg">
       Here are some of my projects
      </p>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8  justify-center items-center">
        {portfolios.map(({ id, title, imageSrc, url }) => (
          <Link key={id} href={`/portfolio/${url}`}>
            <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
              <Image
                src={imageSrc}
                alt={title}
                className="rounded-md duration-200 hover:scale-110" 
            
              />
              <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                {title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
      

        <div className="flex items-center justify-center">
        <Link href="/portfolio">
          <div className="group flex bg-gray-800 hover:bg-slate-700 transition-all ease-in text-white items-center justify-center px-6 py-2 font-bold uppercase rounded-md tracking-wider my-3">
            all projects
            <span className="-rotate-90 duration-100 ease-in group-hover: translate-x-5">
              <MdExpandMore size={25}/>
            </span>
          </div>
        </Link>
        </div>
        </div>
         </div>
  )
}

export default Portfolio