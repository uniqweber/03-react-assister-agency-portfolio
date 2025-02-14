import { faGripLines, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavRow, navItem, socialLink } from '../constant/navNeed';
import logo from '../assets/images/assister-logo.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = ({ isOpen, setIsOpen }) => {
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from('.nav', {
        y: -100,
        duration: 1,
        opacity: 0,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert(); // Cleanup when component unmounts
  });

  return (
    <nav
      className={`bg-dark duration-700 text-white ${
        isOpen ? 'h-[95vh] md:h-[64vh] lg:h-[85vh] 2xl:h-[65vh] ' : 'h-0  '
      }`}
    >
      <div className="flex justify-between items-center relative max-w-screen-lg z-50 mx-auto px-6  py-6 md:py-10 nav">
        <div
          className={`flex items-center gap-2 logo ${
            isOpen ? 'text-white' : 'text-light-dark'
          } duration-700 `}
        >
          <img src={logo} alt="" className="h-10 " />
          <h2 className="text-2xl hidden sm:block   tracking-wide pt-1">
            Assister.
          </h2>
        </div>
        <div className="flex items-center gap-6 ">
          <button
            className={`  px-5 py-1.5 rounded-full font-semibold duration-700 cursor-pointer ${
              isOpen ? 'bg-white text-light-dark' : 'bg-dark text-white'
            }`}
          >
            Contact us
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={` text-2xl size-9 flex items-center justify-center   cursor-pointer rounded-full duration-700 ${
              isOpen
                ? ' text-white bg-light-dark hover:bg-white/10'
                : ' text-light-dark bg-light-dark/10 hover:bg-light-dark/20 '
            }`}
          >
            {isOpen ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faGripLines} />
            )}
          </button>
        </div>
      </div>
      <div className={`${isOpen ? 'opacity-100' : 'opacity-0'} duration-700`}>
        <div className="border-y border-light-dark relative">
          <NavRow
            setIsOpen={setIsOpen}
            navItem={navItem}
            sliceStart={0}
            sliceEnd={2}
          />
        </div>
        <div className="border-b border-light-dark relative">
          <NavRow
            setIsOpen={setIsOpen}
            navItem={navItem}
            sliceStart={2}
            sliceEnd={4}
          />
        </div>
        <div className="max-w-screen-lg mx-auto px-6  py-6 md:py-10">
          <div className="grid grid-cols-1 gap-8  lg:grid-cols-2 ">
            <div>
              <h2 className=" text-base font-semibold text-white mb-4 md:mb-6">
                Our offices
              </h2>
              <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 text-sm">
                <div>
                  <p>Dhaka</p>
                  <h3>Savar Branch</h3>
                  <p>123 Main Street, Dhaka</p>
                </div>
                <div>
                  <p>Chittagong</p>
                  <h3>Town Hall Branch</h3>
                  <p>456 Another Street, Chittagong</p>
                </div>
              </div>
            </div>
            <div className="lg:border-l lg:border-transparent lg:pl-16">
              <h2 className="font-display text-base font-semibold text-white mb-4 md:mb-6">
                Follow us
              </h2>
              <div className="flex items-center gap-6 text-2xl">
                {socialLink.map((item, index) => (
                  <FontAwesomeIcon key={index} icon={item.icon} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
