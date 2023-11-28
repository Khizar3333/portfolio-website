import Image from 'next/image'
import { Inter } from 'next/font/google'
import Homepage from '@/components/Homepage'
import Portfolio from '@/components/Portfolio'
import Experience from '@/components/Experience'
import Me from '@/components/Me'
import Contact from '@/components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    // <div className='w-screen'>
    <div className='max-w-screen-[1600px] mx-auto grid gap-4 '>
         <Homepage />
         <Portfolio/>
         <Experience/>
         <Me/>
         <Contact/>
  </div>

  )
}
