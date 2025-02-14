

const Loading = ({ loading }) => {
  return (
    <>
      {loading && (
        <div className=" fixed inset-0 z-50 flex items-center justify-center  bg-white ">
          <div className="flex gap-2">
            <div className="w-4 h-4 rounded-full bg-highlight animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-highlight animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-highlight animate-bounce [animation-delay:-.5s]"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;
