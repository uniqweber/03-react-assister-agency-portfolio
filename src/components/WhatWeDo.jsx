import { SectionTitle } from '../constant/shared';


const WhatWeDo = () => {
  return (
    <section id="our-process" className="bg-dark">
      <div
        className=" max-w-screen-lg mx-auto py-20 px-6
         "
      >
        <SectionTitle
          smallText="What"
          smallTextColor="text-white"
          title="work we do"
          titleColor="text-white"
          subTitle="Innovations and impact"
          subTitleColor="text-gray-400"
        />
        <div className="sm:columns-2 gap-6 mt-10 space-y-6">
          <div className="   overflow-hidden  ">
            <img
              src="https://i.ibb.co.com/8nT2hz8r/aboutus.jpg"
              alt="About Us"
              className="w-full  h-full object-cover mt-2 opacity-80"
            />
          </div>
          <p className="text-gray-400 text-sm tracking-wide normal-case text-justify ">
            Assister, is the best digital marketing agency in Dhaka Bangladesh,
            offers comprehensive and top-notch 360° digital marketing services,
            including web design and development service, professional search
            engine optimization (SEO) service, social media marketing (SMM)
            service, content development service, Facebook and Google
            advertising service, graphic and video editing service, lead
            generation service, back-office support, and more. As one of the
            best SEO agencies in Bangladesh,Assister is dedicated to enhancing
            the website&apos;s online presence, which drives results. Assister
            stands as the best digital marketing company in Bangladesh by
            ensuring 360° digital marketing solutions for small, medium, and
            large businesses and is committed to empowering businesses and
            individuals to achieve their full potential by crafting customized
            digital strategies that align perfectly with their specific needs
            with a focus on driving success through data-driven strategies.
            Since our establishment in 2019, Red Sparrow Digital has been at the
            forefront of design and technology. We continuously push the
            boundaries of creativity to deliver amazing client results. Our
            holistic approach takes you on a complete journey, guiding you
            through implementing and tracking your digital marketing strategy.
            We tailor our services to your unique business needs, ensuring your
            online presence flourishes. We understand the critical business
            areas, and our priority lies in analytics, audience targeting, and
            data management. By leveraging our prominent data-related
            discipline, we ensure your business experiences effective growth
            through compelling digital experiences. So, are you looking for the
            best digital marketing agency in Bangladesh? Choose Assister for the
            best digital marketing services in Bangladesh, crafted to meet your
            unique business needs and drive success through strategic
            optimization. Our cohesive long-term plan, backed by executive
            support, drives us to pioneer new and innovative technological
            solutions. Our goal is to become a leading name in helping
            businesses find comprehensive solutions by focusing on technology
            and social good to stay ahead.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
