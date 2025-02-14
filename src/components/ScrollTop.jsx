import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => setIsVisible(window.scrollY > 300);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-highlight text-white  rounded-full  hover:bg-highlight/80 duration-300 h-10 w-10 cursor-pointer"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    )
  );
};

export default ScrollTop;
