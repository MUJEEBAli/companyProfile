import React from 'react'

const Hero = () => {
  return (
    <div>
        <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#A437DB]">Certified Developers 
        <br class="hidden lg:inline-block"/>Team in Pakistan
      </h1>
      <p class="mb-8 leading-relaxed">All Of Developer are Fully Certified and Having  More Then Five Year Experience in Web and BlockChain Development  .</p>
      <div class="flex justify-end">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contact Us</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="/jaxson.png"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero