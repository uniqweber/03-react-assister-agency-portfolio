import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Footers from './components/Footers';
import ClientReview from './components/ClientReview';
import OurWorks from './components/OurWorks';
import SendEmail from './components/SendEmail';
import Brand from './components/Brand';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTop from './components/ScrollTop';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from('.nav', { y: -100, duration: 1, opacity: 0 });
      gsap.from('.top-title', { x: -200, duration: 1, opacity: 0 });
      gsap.from('.center-title', {
        x: -300,
        duration: 1,
        opacity: 0,
      });
      gsap.from('.bottom-title', {
        x: -400,
        duration: 1,
        opacity: 0,
      });
      gsap.from('.hero-p', { x: -500, duration: 1, opacity: 0 });
      gsap.from('.hero-button', { x: -500, duration: 1, opacity: 0 });
      gsap.from('.hero-img', { x: 200, duration: 1, opacity: 0 });
    });
    return () => ctx.revert();
  });

  return (
    <>
      <header className="  relative ">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
      <main className="relative z-20 bg-dark h-full">
        <Hero />
        <WhatWeDo />
        <Services />
        <AboutUs />
        <OurWorks />
        <Brand />
        <ClientReview />
        <SendEmail />
        <Footers />
        <ScrollTop />
      </main>
    </>
  );
};

export default App;
