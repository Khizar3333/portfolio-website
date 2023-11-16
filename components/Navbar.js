import React,{useState, useEffect} from 'react'
import Link from 'next/link'
import {
    FaBars,
    FaTimes,
    FaFacebook,
    FaGithub,
    FaTwitter,
    FaLinkedin,
  } from "react-icons/fa";
const Navbar = () => {
    const [navigation, setNavigation] = useState(false)
    const [pageScroll, setPageScroll] = useState(false);

    useEffect(() => {
      const sub = window.addEventListener("scroll", () =>
        setPageScroll(window.scrollY >= 90)
      );
  
      return sub;
    }, []);


    const links=[
        {
        id:1,
        link:'home',
    },
    {
        id:2,
        link:'portfolio',
    },
    {
        id:3,
        link:'experience',
    },
    {
        id:4,
        link:'me',
    },
    {
        id:5,
        link:'contact',
    },
    ]
  return (
    <div className=" w-full h-20 z-10 fixed bg-black text-white duration-300  hover:bg-gray-700 transition-all ease-in"  >
      
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
        <Link href="/#home">
            <h1 className="text-3xl lg:text-4xl font-bold uppercase underline-offset-2 tracking-wider cursor-pointer">khizar</h1>
        </Link>
        <div>
            <ul className="hidden md:flex">

{links.map(({ id, link }) => (
              <Link key={id} href={`/#${link}`}>
                <li  className="ml-10 text-sm font-semibold uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                  {link}
                </li>
              </Link>
            ))}
                
            </ul>
            {
                !navigation &&(
                
                    <div className="md:hidden cursor-pointer" onClick={()=>setNavigation(true)}>
            <FaBars size={30}/>
            </div>
  )
            }
            
        </div>
      </div>
      <div className={navigation?"md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur": ""}>
<div className={
    navigation? 
    "fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-gray-700 to-gray-400 text-white duration-500 ease-in p-10"

 :"fixed top-0 left-[-100%] p-10 h-full ease-in duration-500"}>

<div>

    <div className=" flex w-full items-center justify-between">
        <Link href="/#home">
            <h2  onClick={() => setNavigation(false)} className="text-3xl  font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer">khizar</h2>
        </Link>
        <div className="p-3 cursor-pointer" onClick={()=> setNavigation(false)}>
            <FaTimes size={30}/>
        </div>
    </div>
</div>
<div className="mt-24 gap-20 h-fit flex flex-col">
<ul className="uppercase">
{links.map(({ id, link }) => (
              <Link key={id} href={`/#${link}`}>
                <li  onClick={() => setNavigation(false)} className="py-4 cursor-pointer tracking-wide text-xl">{link}
                </li>
              </Link>
            ))}
</ul>
<div className="grid grid-cols-2 w-4/5 mx-auto gap-10 h-full">
  <div className="flex items-center justify-center cursor-pointer p-2 rounded-full shadow-md shadow-white">
<FaLinkedin size={25}/>
  </div>
  <div className="flex items-center justify-center cursor-pointer p-2 rounded-full shadow-md shadow-white">
<FaTwitter size={25}/>
  </div>
  <div className="flex items-center justify-center cursor-pointer p-2 rounded-full shadow-md shadow-white">
<FaFacebook size={25}/>
  </div>
  <div className="flex items-center justify-center cursor-pointer p-2 rounded-full shadow-md shadow-white">
<FaGithub size={25}/>
  </div>
</div>
</div>
</div>
</div>

    </div>
  )
}


export default Navbar
