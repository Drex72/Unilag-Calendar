const Symbols = () => {
  return (
    <div className=" pt-3 w-full ">
      <div>
        <img
          src={require("./unilag-logo.jpeg")}
          className="cursor-pointer h-[100px] w-[110px] ml-3"
          alt="Unilag Logo"
        />
        <div className="flex justify-center">
          <h1 className="text-[40px] -translate-y-[80px]">
            University Calendar
          </h1>
        </div>
      </div>
      
      <div
        className="cursor-pointer mt-8 text-center mx-auto border
            rounded-lg border-grey max-w-[700px] space-y-4 text-[20px] p-12"
        >
        <p className="opacity-[.85]">
          Coming Soon...
        </p>
      </div>
    </div>
  );
};

export default Symbols;
