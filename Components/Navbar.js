import React from 'react'
import { FcCustomerSupport } from "react-icons/fc";
import Link from 'next/link';


const Navbar = () => {
  return (
    <div className='sticky top-0'>
        <header className=" bg-white text-gray-600 body-font ">
  <div className="container mx-auto flex flex-wrap px-20 p-2 flex-col md:flex-row items-center">
    <Link href="/"  className="flex title-font font-medium items-center text-gray-900  mb-4 md:mb-0">
    <img
      src="/jaxson.png"
      alt="Picture of the author"
      width="100px"
      height="80px"
      
    />
    </Link>
    <nav className="md:ml-auto flex flex-wrap gap-7 items-center text-base justify-center">
      <Link href="#service" className="mr-5 hover:text-gray-900">For candidates</Link>
      <Link  href='#'className="mr-5 hover:text-gray-900">For business</Link>
      <Link  href='#projects' className="mr-5 hover:text-gray-900">Case studies</Link>
      <Link  href='#projects' className="mr-5 hover:text-gray-900">About us</Link>
      <Link  href='#projects' className="mr-5 hover:text-gray-900">Blogs</Link>
      <Link  href='#projects' className="mr-5 hover:text-gray-900">Carriers</Link>
    </nav>
    <button className="inline-flex items-center bg-white border-0 py-1 px-6 focus:outline-none hover:bg-blue-200 rounded text-base mt-4 md:mt-0"> <FcCustomerSupport className='h-10 w-5'/></button>
  </div>
  <div class="w-full h-0.5 rounded-full bg-slate-100 inline-flex"></div>
</header>

    </div>
  )
}

export default Navbar