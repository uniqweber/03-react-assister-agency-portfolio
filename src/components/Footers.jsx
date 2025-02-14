import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialLink } from '../constant/navNeed';

const Footers = () => {
  return (
    <footer className="bg-dark  ">
      <div className="max-w-screen-lg mx-auto px-6 ">
        <div className=" flex text-gray-400 flex-col md:flex-row items-center sm:justify-between py-10">
          <p>© 2025 Assister. All rights reserved.</p>
          <div className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
            {socialLink.map((item, index) => (
              <a
                href={item.link}
                key={index}
                className="hover:text-highlight duration-300 hover:scale-125 text-xl "
              >
                <FontAwesomeIcon icon={item.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
