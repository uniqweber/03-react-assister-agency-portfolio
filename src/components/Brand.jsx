import imgOne from '../assets/images/brands/aci-motors.webp';
import imgTwo from '../assets/images/brands/avian.webp';
import imgThree from '../assets/images/brands/bumrungrad.webp';
import imgFour from '../assets/images/brands/innstar.webp';
import imgFive from '../assets/images/brands/kareems.webp';
import imgSix from '../assets/images/brands/manama.webp';
import imgSeven from '../assets/images/brands/sunrise.webp';
const Brand = () => {
  const brands = [imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix, imgSeven];

  return (
    <div className="overflow-hidden  w-full ">
      <div className="flex items-center justify-center  mt-10 ">
        <div className="flex  items-center gap-20 animate-slide">
          {[...brands, ...brands, ...brands, ...brands].map((item, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                key={index}
                src={item}
                alt="Brand"
                className="h-10  grayscale-100 hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
