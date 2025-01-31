import {  faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SendEmail = () => {
  return (
    <section className="bg-dark py-20">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="bg-light-dark border-2 border-gray-800 p-10 grid md:grid-cols-2 gap-6">
          <div>
            <h1 className="text-2xl font-semibold text-highlight uppercase">
              Stay in touch
            </h1>
            <p className="text-sm text-gray-500">
              At our company, we value open communication and are committed to
              providing you with the best service possible. Please feel free to
              reach out with any inquiries or feedback you may have. Your
              thoughts are important to us.
            </p>
          </div>
          <form className="h-full flex items-center">
            <input
              type="email"
              placeholder="Email"
              className="bg-white w-full h-10 px-3 outline-none"
            />
            <button
              type="submit"
              className="bg-highlight text-white h-10 px-4"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SendEmail;
