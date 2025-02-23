import imgOne from '../assets/images/brands/aci-motors.webp';
import imgThree from '../assets/images/brands/bumrungrad.webp';
import imgFour from '../assets/images/brands/innstar.webp';
import imgFive from '../assets/images/brands/kareems.webp';
import imgSix from '../assets/images/brands/manama.webp';
import imgSeven from '../assets/images/brands/sunrise.webp';
import imgNine from '../assets/images/brands/logo-11.webp';
import imgTen from '../assets/images/brands/logo-12.webp';
import imgEleven from '../assets/images/brands/logo-13.webp';
import imgTwelve from '../assets/images/brands/logo-15.webp';
import imgThirteen from '../assets/images/brands/logo-16.webp';
import imgFourteen from '../assets/images/brands/logo-17.webp';
import imgFifteen from '../assets/images/brands/logo-18.webp';
import imgSixteen from '../assets/images/brands/logo-19.webp';
import imgSeventeen from '../assets/images/brands/logo-10.webp';

import { SectionTitle } from '../constant/shared';
const Brand = () => {
  const brands = [
    imgOne,
    imgThree,
    imgFour,
    imgFive,
    imgSix,
    imgSeven,
    imgNine,
    imgTen,
    imgEleven,
    imgTwelve,
    imgThirteen,
    imgFourteen,
    imgFifteen,
    imgSixteen,
    imgSeventeen,
  ];

  return (
    <section className="overflow-hidden pt-20 pb-28 bg-dark  w-full ">
      <div className="max-w-screen-lg  mx-auto px-6">
        <SectionTitle
          title={'collaboration'}
          smallText={'Brands'}
          smallTextColor={'text-white'}
          titleColor={'text-white'}
          subTitle={'Re-known brans in bangladesh'}
          subTitleColor="text-gray-400"
        />
        <div className="  grid grid-cols-2 md:grid-cols-5 gap-4  mt-10  ">
          {[...brands].map((item, index) => (
            <div
              key={index}
              className="border border-white/20 p-3 bg-white flex items-center justify-center "
            >
              <img
                src={item}
                alt="Brand"
                className="h-13 grayscale-100 object-contain hover:grayscale-0  transition-all duration-300 cursor-pointer hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;
