import Head from 'next/head'
import Image from 'next/image'
import Hero from './section/hero'
import { Footer } from '../Components/Footer'
import Navbar from '../Components/Navbar'
import styles from '../styles/Home.module.css'
import Services from './section/Services'
import Team from './section/Team'
import Testimonial from './section/testimonial'
import Products from './section/Products'
import Projects from './section/Projects'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jaxson App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar className="sticky top-0 z-50"/>

      <Hero/>
      <Services/>

      <Products/>
      <Team/>
      <Projects/>
      <Testimonial/>


      <Footer/>

      
    </div>
  )
}