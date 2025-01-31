import Brand from './Brand';

const Hero = () => {
  return (
    <section>
      <div className=" bg-white rounded-t-4xl pt-24 pb-24">
        <div className="max-w-screen-lg mx-auto  w-full  pt-20 px-6">
          <h1 className=" text-5xl md:text-7xl lg:text-7xl  font-thin uppercase text-light-dark relative ">
            <div className="relative">
              <div className="flex items-center gap-4">
                <span className="text-2xl">The</span>
                <div className="h-2 rounded-full w-32 bg-light-dark"></div>
              </div>
              <span className="inline-flex items-center gap-4 font-bold py-1.5">
                Loud
                <span className="flex items-center gap-2 text-highlight">
                  Voice
                </span>
              </span>
              <span className="block">of your Brand</span>
            </div>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-thin text-sub-dark w-full md:w-2/3 mt-8">
            We&apos;re the best digital marketing agency in Bangladesh.
          </p>
          <button className="bg-highlight cursor-pointer hover:bg-highlight/80 duration-700 text-white px-8 py-3  my-10 ">
            Explore Our Services
          </button>
        </div>
        <Brand />
      </div>
    </section>
  );
};

export default Hero;
