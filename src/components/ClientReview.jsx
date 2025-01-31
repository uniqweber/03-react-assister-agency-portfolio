import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faQuoteLeft,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { reviewNeed } from '../constant/reviewNeed';

const ClientReview = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const handleReview = (direction) => {
    if (direction === 'left') {
      setCurrentReview((prev) =>
        prev === 0 ? reviewNeed.length - 1 : prev - 1,
      );
    } else if (direction === 'right') {
      setCurrentReview((prev) =>
        prev === reviewNeed.length - 1 ? 0 : prev + 1,
      );
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) =>
        prev === reviewNeed.length - 1 ? 0 : prev + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white">
      <div className="max-w-screen-lg px-6  mx-auto  py-20 flex flex-col md:flex-row items-center justify-center gap-6">
        <div
          onClick={() => handleReview('left')}
          className="bg-highlight  cursor-pointer w-10 h-10 rounded-full  items-center justify-center text-white flex-shrink-0 hidden md:flex"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className=" w-full overflow-hidden flex items-center ">
          {reviewNeed.map((review, index) => (
            <div
              style={{
                transform: `translateX(-${currentReview * 100}%)`,
              }}
              key={index}
              className="w-full duration-1000 flex-shrink-0 text-center  rounded-lg py-5 px-10"
            >
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="text-gray-400 text-5xl sm:text-6xl md:text-7xl pb-2"
              />

              <p className="text-lg sm:text-xl md:text-2xl font-medium text-dark">
                {review.review}
              </p>

              <div className="flex items-center justify-center mt-6 space-x-3">
                <div className="w-2 h-2 rounded-full bg-highlight animate-pulse"></div>
                <div className="flex items-center  ">
                  <div className="pr-3 font-medium text-dark ">
                    {review.name}
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 text-left border-l-2 border-gray-300">
                    <h2 className="text-sm font-light text-gray-500 ">
                      {review.designation}
                    </h2>
                    <h2 className="text-sm font-light text-gray-500 ">
                      {review.company}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          onClick={() => handleReview('right')}
          className="bg-highlight cursor-pointer  w-10 h-10 rounded-full  items-center justify-center text-white flex-shrink-0 hidden md:flex"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
