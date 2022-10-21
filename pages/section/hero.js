import React from 'react'

const Hero = () => {
  return (
    <div>
        <section className=" bg-hero text-white bg-no-repeat bg-cover bg-center bg-fixed body-font">
  <div className="container mx-auto flex px-5 py-36 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 mx-12 font-medium">Community that<br/> drives your career<br/> and life potential from day one
      </h1>
      <p className="mb-8 mx-12 leading-relaxed">In Vstorm, we build high-tech software and provide remote teams for top-tier brands.<br/>  We, individuals, build empires..</p>
      <div className="mx-12 ">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Hire Us</button>
      </div>
    </div>
    
    
  </div>
</section>
    </div>
  )
}

export default Hero