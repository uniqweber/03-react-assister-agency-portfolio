export const NavRow = ({ navItem = [], sliceStart, sliceEnd }) => {
  return (
    <div className="grid md:grid-cols-2 max-w-screen-lg mx-auto px-6 text-2xl md:text-4xl capitalize font-medium">
      {navItem.slice(sliceStart, sliceEnd).map((service, index) => (
        <div
          key={index}
          className={`group ${index === 1 ? 'md:even:pl-16' : ''}`}
        >
          <span className="relative z-10 py-6 md:py-10 cursor-pointer block">
            {service}
          </span>
          <span
            className={`absolute w-full md:w-1/2 h-1/2 md:h-full ${
              index === 0 ? 'top-0 left-0' : 'bottom-0 right-0'
            } group-hover:bg-light-dark duration-300`}
          ></span>
        </div>
      ))}
      <div className="absolute w-full md:w-px h-px md:h-full top-1/2 md:top-0 md:left-1/2 left-0 bg-light-dark"></div>
    </div>
  );
};

export const navItem = ['Our services', 'Our works', 'About us', 'Our process'];
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
export const socialLink = [
  {
    icon: faFacebook,
    link: '',
  },
  {
    icon: faLinkedin,
    link: '',
  },
  {
    icon: faTwitter,
    link: '',
  },
  {
    icon: faGithub,
    link: '',
  },
];
