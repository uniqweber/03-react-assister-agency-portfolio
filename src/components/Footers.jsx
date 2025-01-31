import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialLink } from '../constant/navNeed';

const Footers = () => {
  return (
    <footer className="bg-white border-t border-gray-200 ">
      <div className="max-w-screen-lg mx-auto px-6 ">
        <div className="  sm:flex sm:items-center sm:justify-between py-10">
          <p>© 2025 Assister. All rights reserved.</p>

          <div className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
            {socialLink.map((item, index) => (
              <a href={item.link} key={index}>
                <FontAwesomeIcon icon={item.icon} className="text-gray-500 text-xl" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
