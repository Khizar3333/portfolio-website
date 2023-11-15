import React from 'react'
import { MdExpandMore } from "react-icons/md";
import Todolist from "../../public/assets/portfolio/Todolist.png";
import blog from "../../public/assets/portfolio/blog.png"
import currencycon from "../../public/assets/portfolio/currencyconverter.png"
import tictactoe from "../../public/assets/portfolio/tictactoe.png"

import Link from "next/link";
import Image from "next/image";

export const getStaticProps=async ()=>{
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
      return{
        props:{portfolios}
      }
}

const Portfolioroutes=({portfolios})=> {
   
  return (
    <div id="portfolio" className="w-full ">
    <div className="max-w-screen-xl mx-auto pt-24 p-6 text-center md:text-left">
      <h2 className=" pb-10 text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
        portfolio
      </h2>
      

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
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
      

        
        </div>
         </div>
  )
}

export default Portfolioroutes