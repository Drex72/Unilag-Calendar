import { Link } from "react-router-dom";

const SectionXI = () => {
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
      <div className="mx-auto max-w-[300px] bg-purple rounded-lg p-2">
        <h1 className="text-center text-white text-[35px]">Section XI</h1>
      </div>
      <div
        className="cursor-pointer mt-8 text-center mx-auto border
            rounded-lg border-grey max-w-[600px] space-y-4 text-[20px] mb-10 p-10"
      >
        <div className="font-extrabold text-[23px]">
          <Link to="/symbols">
            Welfare policies for University Staff and Student
          </Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Housing Unit and Staff Quarters.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Medical Centre and Health Insurance Scheme.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Sports Centre.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Staff Unions.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Cooperative Societies.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Places of worship.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">University of Lagos Staff School.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">PInternational School, University of Lagos.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">
            University of Lagos Women Society's Creche, Nursery and Primary
            School.
          </Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">DSA's Office.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Scholarships and Bursaries.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Prizes and Medals.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">
            Support for People Living with Disabilities (PLWDs).
          </Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Work Study.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Halls of Residence.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Students Union and Associations.</Link>
        </div>
      </div>
    </div>
  );
};

export default SectionXI;
