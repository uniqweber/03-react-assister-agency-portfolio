import { SectionTitle } from '../constant/shared';

const OurWorks = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-screen-lg mx-auto px-6">
        <SectionTitle
          smallText="Projects"
          title="Things we've made"
          subTitle="We've worked with some of the best companies in the world"
        />
        <div className="grid grid-cols-3 gap-6 mt-10 ">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div key={index} className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/50 p-5 z-10 flex flex-col justify-end ">
                <h1 className=" text-xl uppercase font-semibold tracking-wide  text-white mb-2">Project {index + 1}</h1>
                <p className=" text-sm text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos.
                </p>
              </div>
              <img
                src={`https://i.pinimg.com/564x/34/65/b8/3465b890b11571e2c876ae74dc1b3139.jpg`}
                alt=""
                className="w-full h-full object-cover group-hover:scale-125 duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
