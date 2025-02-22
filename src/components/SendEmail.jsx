import { faCheckCircle, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const SendEmail = () => {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    if (name && email) {
      setLoading(true);
      fetch(
        'https://script.google.com/macros/s/AKfycbxwKh3oc705jNdu7Y2CFzzKxHwZ54qsuz7i7z6Ra7McniJeB_uqI6nMg4VltfvwoO9o/exec',
        {
          method: 'POST',
          body: new FormData(e.target),
        },
      )
        .then((res) => res.json())
        .then(() => {
          setLoading(false);
          setShowSuccess(true);
          e.target.reset();
        })
        .catch((err) => console.log(err));
    }
  };

  setTimeout(() => {
    setShowSuccess(false);
  }, 1500);

  return (
    <div id="contact" className="bg-dark pt-24 pb-12">
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

          <form
            onSubmit={handleOnSubmit}
            className="w-full space-y-3 text-sm bg-white  p-5 md:p-8"
          >
            <input
              name="name"
              type="text"
              required
              className="w-full bg-white h-11 border-gray-300 border px-4"
              placeholder="Enter Your Name"
            />
            <input
              type="email"
              name="email"
              required
              className="w-full bg-white h-11 border-gray-300 border px-4"
              placeholder="Enter Your Email"
            />
            <textarea
              name="message"
              className="w-full bg-white h-32 border-gray-300 border px-4 py-3 resize-none"
              placeholder="Enter Your Message (Optional)"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className={` cursor-pointer disabled:cursor-not-allowed  duration-300 text-white h-10 w-full flex items-center justify-center ${
                loading ? 'bg-dark ' : 'bg-highlight hover:bg-yellow-600'
              }`}
            >
              {loading ? (
                <>
                  <span className="pr-2">Sending</span>
                  <div className=" h-2 w-2 bg-white rounded-full animate-pulse"></div>
                  <div className="mx-1 h-2 w-2 bg-white rounded-full animate-pulse"></div>
                  <div className="h-2 w-2 bg-white rounded-full animate-pulse"></div>
                </>
              ) : (
                <>
                  Send Message
                  <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      <div
        className={`bg-white duration-300 h-9 px-4 rounded-full fixed top-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 border border-gray-300 text-sm font-semibold  ${
          showSuccess
            ? 'scale-100 translate-y-0 opacity-100'
            : 'scale-75 -translate-y-10 opacity-0'
        }`}
      >
        <FontAwesomeIcon
          icon={faCheckCircle}
          className="text-green-500 text-lg"
        />
        <span className="pt-1">Thank you for your message</span>
      </div>
    </div>
  );
};

export default SendEmail;
