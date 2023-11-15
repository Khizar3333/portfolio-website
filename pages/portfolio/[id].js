import React from 'react'

import Todolist from "../../public/assets/portfolio/Todolist.png";
import tictactoe from "../../public/assets/portfolio/tictactoe.png"
import blog from "../../public/assets/portfolio/blog.png"
import currencycon from "../../public/assets/portfolio/currencyconverter.png"


import { FaGithub } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import { MdExpandMore } from "react-icons/md";

import Link from "next/link";
import Image from "next/image";
const getPortfolioFrom=(url)=>portfolios.filter(p=>p.url===url)[0]
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
export async function getStaticPaths() {
  const paths = portfolios.map((p) => ({
    params: { id: p.url },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const portfolio = getPortfolioFrom(params.id);

  return {
    props: { portfolio },
  };
}

const OnePortfolio = ({portfolio:{title, imageSrc}}) => {
  return (
    <div className="h-fit w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24
      p-8 flex flex-col">
<div className="flex">
  <Link href="/portfolio">
<div className="flex items-center justify-center my-8 font-bold text-indigo-500 capitalize cursor-pointer">
<BiChevronLeft size={25}/>back
</div>
  </Link>
</div>
<h1 className="mt-2 mb-8 text-4xl capitalize text-center md:text-left text-blue-500 tracking-wider">{title}</h1>
<div className="w-96 h-56 relative mx-auto overflow-hidden my-8">
<Image src={imageSrc} alt="react weather app" fill style={{objectFit:"cover"}} />
</div>
<h2 className=" text-center md:text-left my-4 text-2xl font-bold">Description</h2>
<p>
          Human thy god sainted is the distinctly shrieked grave bird shrieked,
          yore borrow nevermore but gaunt maiden have nothing darkness, answer
          evermore word there from raven, sorrowsorrow from on and nevermore of
          core. Whom the meant and while i of respiterespite his lamplight. Or
          being weary parting grave lent if. Rare came stillness whether the
          lord. Bust myself whom of soul silken. The that there this my, quaint
          that only lenore stern muttered and nothing or tapping. Here lie
          lining i still. A tis some and chamber flitting. Lamplight radiant
          from no yet what, upon that that one decorum leave.
        </p>
        <div className="flex items-center justify-center gap-10">
        <Link href="/" >
        <div className="group flex bg-blue-500 text-white items-center justify-center px-6 py-2 font-bold uppercase rounded-md tracking-wider my-3 cursor-pointer">
            resume
            <span className="duration-200 ease-in ">
              <AiOutlineCaretRight size={18}/>
            </span>
          </div>
            </Link>
            <Link href="https://github.com/Khizar3333" download={true}>
        <div className="group flex bg-blue-500 text-white items-center justify-center px-6 py-2 font-bold uppercase rounded-md tracking-wider my-3 cursor-pointer">
            portfolio
            <span className=" duration-200 ease-in">
              <FaGithub size={18}/>
            </span>
          </div>
            </Link>
      </div>
      </div>
    </div>
  )
}

export default OnePortfolio
