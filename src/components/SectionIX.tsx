import { Link } from "react-router-dom";

const SectionIX = () => {
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
      <div className="cursor-pointer mx-auto max-w-[300px] bg-purple rounded-lg p-2">
        <h1 className="text-center text-white text-[35px]">Section IX</h1>
      </div>
      <div
        className="mt-8 text-center mx-auto border
            rounded-lg border-grey max-w-[600px] space-y-4 text-[20px] mb-10 p-10"
      >
        <div className="font-extrabold text-[23px]">
          <Link to="/symbols">Strategic Units </Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Research and Innovations.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">
            International Relations, Partnerships and Prospects.
          </Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Alumni and External Relations.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Unilag Business School.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">School of Foundation Studies.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Microfinance Bank Ltd.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Academic Publishing Centre.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Radio Unilag.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Unilag TV.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Unilag Property and Development Unit (PDU).</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Unilag Consult Ltd.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Pharmacy.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Ventures.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Guest Houses.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Press.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Unilag Bookshop.</Link>
        </div>
      </div>
    </div>
  );
};

export default SectionIX;
