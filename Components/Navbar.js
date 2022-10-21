import React from 'react'
import { FcCustomerSupport } from "react-icons/fc";
import Link from 'next/link';


const Navbar = () => {
  return (
    <div className='sticky top-0'>
        <header className=" bg-white text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img
      src="/jaxson.png"
      alt="Picture of the author"
      width="100px"
      height="80px"
    />
    </a>
    <nav className="md:ml-auto flex flex-wrap gap-5 items-center text-base justify-center">
      <Link href="/"  className="mr-5 hover:text-gray-900">Home</Link>
      <Link href="#service" className="mr-5 hover:text-gray-900">Services</Link>
      <Link  href='#team'className="mr-5 hover:text-gray-900">Our Team</Link>
      <Link  href='#projects' className="mr-5 hover:text-gray-900">Projects</Link>
    </nav>
    <button className="inline-flex items-center bg-white border-0 py-1 px-6 focus:outline-none hover:bg-blue-200 rounded text-base mt-4 md:mt-0"> <FcCustomerSupport className='h-10 w-5'/></button>
  </div>
</header>
    </div>
  )
}

export default Navbar