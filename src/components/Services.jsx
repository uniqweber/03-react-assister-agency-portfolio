import { servicesNeed } from '../constant/servicesNeed';
import { SectionTitle } from '../constant/shared';

const Services = () => {
  return (
    <section id='our-services' className="bg-white">
      <div className="  py-20 ">
        <div
          className=" max-w-screen-lg mx-auto  px-6 
         "
        >
          <SectionTitle
            smallText="our"
            smallTextColor="text-light-dark"
            title="services"
            titleColor="text-light-dark"
            subTitle="We work with you, Not for you"
            subTitleColor="text-sub-dark"
          />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 mt-10 ">
            {servicesNeed.map((item, index) => (
              <div
                key={index}
                className={`bg-gray-100   border border-gray-200 p-5  ${
                  index === 0 && 'md:row-span-2'
                } ${index === 1 && 'md:col-span-2'} ${
                  index === 3 && 'md:row-span-2'
                } ${index === 4 && 'md:col-span-2'}`}
              >
                <div className="flex justify-center items-center h-12 w-12 p-2 border bg-white rounded-xl border-gray-200">
                  <img src={item.icon} alt="" className="h-full w-full" />
                </div>
                <h2 className="text-lg font-bold capitalize text-light-dark my-2">
                  {item.title}
                </h2>
                <p className="text-gray-500 text-sm text-j  ">{item.description}</p>     
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
