import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { growthNeed } from '../constant/growthNeed';

const Growth = () => {
  return (
    <section className="bg-white">
      <div className="bg-highlight/5 border-t border-highlight py-28 rounded-t-4xl">
        <div className="  max-w-screen-lg mx-auto px-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {growthNeed.map((item, index) => (
            <div
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-[0px_0px_30px_rgba(0,0,0,0.1)] hover:bg-highlight"
              key={index}
            >
              <FontAwesomeIcon
                className="text-2xl text-highlight"
                icon={item.icon}
              />
              <h2 className="text-xl font-bold text-light-dark my-2">
                {item.title}
              </h2>
              <p className="text-gray-500 text-sm tracking-wide">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Growth;
