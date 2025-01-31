import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Footers from './components/Footers';
import ClientReview from './components/ClientReview';
import OurWorks from './components/OurWorks';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="  relative ">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
      <main className="relative z-20 bg-dark">
        <Hero />
        <WhatWeDo />
        <Services />
        <AboutUs />
        <OurWorks />
        <ClientReview />
        <Footers />
      </main>
    </>
  );
};

export default App;
