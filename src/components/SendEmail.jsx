import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SendEmail = () => {
  return (
    <section className="bg-dark py-24">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="bg-light-dark border-2 border-neutral-800 p-6 md:p-10 grid gap-10 md:grid-cols-2 ">
          <div className="md:pr-14 ">
            <h1 className="text-3xl font-semibold text-highlight uppercase mb-2">
              Stay in touch
            </h1>
            <p className=" text-gray-400">
              At our company, we value open communication and are committed to
              providing you with the best service possible. Please feel free to
              reach out with any inquiries or feedback you may have. Your
              thoughts are important to us.
            </p>
          </div>

          <div className="w-full space-y-3 text-sm bg-white  p-5 md:p-8">
            <input
              type="text"
              className="w-full bg-white h-11 border-gray-300 border px-4"
              placeholder="Enter Your Name"
            />
            <input
              type="text"
              className="w-full bg-white h-11 border-gray-300 border px-4"
              placeholder="Enter Your Email"
            />
            <textarea
              className="w-full bg-white h-32 border-gray-300 border px-4 py-3 resize-none"
              placeholder="Enter Your Message"
            ></textarea>
            <button className="bg-highlight text-white h-10 w-full">
              Submit
              <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendEmail;
