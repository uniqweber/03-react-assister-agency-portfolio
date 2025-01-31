import { SectionTitle } from '../constant/shared';
import { aboutUsNeed } from '../constant/aboutUsNeed'; 

const AboutUs = () => {
  return (
    <section className="bg-dark">
      <div className=" max-w-screen-lg mx-auto  px-6 py-20">
        <SectionTitle
          smallText="know"
          smallTextColor="text-white"
          title="About us"
          titleColor="text-white"
          subTitle="We're more than a digital company"
          subTitleColor="text-gray-400"
        />
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {aboutUsNeed.top.map((item, index) => (
            <div
              key={index}
              className={`${
                index === 0 && 'sm:col-span-2 sm:row-span-2'
              } relative overflow-hidden  group`}
            >
              <img
                src={item.img}
                alt="About Us"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 opacity-80"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/50 transition-all duration-500 flex flex-col items-start justify-end p-4">
                <h2 className="text-white text-xl font-medium ">{item.title}</h2>
                <h2 className="text-white text-sm font-thin">{item.subTitle}</h2>
              </div>
            </div>
          ))}
          {aboutUsNeed.bottom.map((item, index) => (
            <div key={index} className=" py-4">
              <h2 className="text-2xl font-bold text-white pb-5">
                {item.title}
              </h2>
              <p className="text-gray-400 text-sm tracking-wide  line-clamp-5">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
