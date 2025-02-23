import wp from '../assets/images/whatsapp-icon.png';

const Whatsapp = () => {
  return (
    <div className="fixed bottom-7 left-7 z-20 ">
      <a
        target="_blank"
        href="https://wa.me/+8801779759629"
        className="relative  block "
      >
        <img src={wp} alt="" className="h-12 w-12 " />
        <div className="bg-rose-600 text-white w-4 h-4 rounded-full flex items-center justify-center text-[10px] pt-0.5 font-bold absolute right-0 top-0">
          1
        </div>
      </a>
    </div>
  );
};

export default Whatsapp;
