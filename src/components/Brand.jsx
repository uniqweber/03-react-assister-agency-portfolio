import imgOne from '../assets/images/brands/aci-motors.webp';
import imgThree from '../assets/images/brands/bumrungrad.webp';
import imgFour from '../assets/images/brands/innstar.webp';
import imgFive from '../assets/images/brands/kareems.webp';
import imgSix from '../assets/images/brands/manama.webp';
import imgSeven from '../assets/images/brands/sunrise.webp';
import { SectionTitle } from '../constant/shared';
const Brand = () => {
  const brands = [imgOne, imgThree, imgFour, imgFive, imgSix, imgSeven];

  return (
    <section  className="overflow-hidden pt-20 pb-28 bg-dark  w-full ">
      <div className="max-w-screen-lg  mx-auto px-6">
        <SectionTitle title={"collaboration"} smallText={"Brands"} smallTextColor={"text-white"} titleColor={"text-white"} subTitle={"Re-known brans in bangladesh"} subTitleColor="text-gray-400" />
        <div className="  grid grid-cols-2 md:grid-cols-4 gap-4  mt-10  ">
          {[...brands, ...brands].map((item, index) => (
            <div key={index} className="border border-white/20 p-2 bg-white ">
              <img
                src={item}
                alt="Brand"
                className="h-20 grayscale-100 object-contain hover:grayscale-0  transition-all duration-300 cursor-pointer hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;
