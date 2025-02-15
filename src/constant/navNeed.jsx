export const NavRow = ({ navItem = [], sliceStart, sliceEnd, setIsOpen }) => {
  return (
    <div className="grid md:grid-cols-2 max-w-screen-lg mx-auto px-6 text-2xl md:text-4xl capitalize font-medium">
      {navItem.slice(sliceStart, sliceEnd).map((service, index) => (
        <a
          href={service.link}
          onClick={() => setIsOpen(false)}
          key={index}
          className={`group ${index === 1 ? 'md:even:pl-16' : ''} block`}
        >
          <span className="relative z-10 py-6 md:py-10 cursor-pointer block">
            {service.name}
          </span>
          <span
            className={`absolute w-full md:w-1/2 h-1/2 md:h-full ${
              index === 0 ? 'top-0 left-0' : 'bottom-0 right-0'
            } group-hover:bg-light-dark duration-300`}
          ></span>
        </a>
      ))}
      <div className="absolute w-full md:w-px h-px md:h-full top-1/2 md:top-0 md:left-1/2 left-0 bg-light-dark"></div>
    </div>
  );
};

export const navItem = [
  { name: 'Our Process', link: '#our-process' },
  { name: 'Our services', link: '#our-services' },
  { name: 'Our Works', link: '#our-works' },
  { name: 'About Us', link: '#about-us' },
];
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
export const socialLink = [
  {
    icon: faFacebook,
    link: 'https://facebook.com',
  },
  {
    icon: faLinkedin,
    link: 'https://linkedin.com',
  },
  {
    icon: faTwitter,
    link: 'https://twitter.com',
  },
  {
    icon: faGithub,
    link: 'https://github.com',
  },
];
