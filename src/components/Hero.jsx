import hero from '../assets/images/hero.svg';

const Hero = () => {
  return (
    <section>
      <div className=" bg-white  pt-24 pb-32">
        <div className="max-w-screen-lg mx-auto   w-full  pt-16  px-6 flex flex-col md:flex-row gap-10 md:gap-2 items-center justify-center  md:justify-between  ">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold uppercase ">
              <span className="text-xl block text-highlight  top-title">
                We Build Brands with
              </span>
              <span className="text-sub-dark block mt-3  center-title">
                Smart Digital
              </span>
              <span className="mt-2 block bottom-title "> Solutions</span>
            </h1>
            <p className="text-xl text-gray-500  mt-5 mb-8 font-light hero-p">
              🚀 Web Development | Creative Design | Video Editing | E-commerce
              Growth | Social Media Marketing
            </p>
            <a
              href="#review"
              className="bg-highlight inline-block cursor-pointer hover:bg-highlight/80  text-white px-8 py-3  hero-button"
            >
              Explore Our Feedbacks
            </a>
          </div>
          <div className="flex-1 hidden md:flex items-center justify-center md:justify-end  ">
            <img
              src={hero}
              className="scale-x-[-1] h-96 md:-mr-7 hero-img"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
