import { SectionTitle } from '../constant/shared';
import { projects } from '../constant/ourWorksNeed';

const OurWorks = () => {
  return (
    <section id="our-works" className="bg-white py-20">
      <div className="max-w-screen-lg mx-auto px-6">
        <SectionTitle
          smallText="Projects"
          title="we have made"
          subTitle="We've worked with some of the best companies in the world"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 ">
          {projects.map((item, index) => (
            <div key={index} className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/20 p-5 z-10 flex flex-col justify-end ">
                <div className='bg-black/70 p-2'>
                  <h1 className=" text-xl uppercase font-semibold tracking-wide  text-white mb-2">
                    {item.title}
                  </h1>
                  <p className=" text-sm text-white ">{item.subtitle}</p>
                </div>
              </div>
              <img
                src={item.img}
                alt=""
                className="w-full h-[400px] object-cover group-hover:scale-125 duration-700 "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
