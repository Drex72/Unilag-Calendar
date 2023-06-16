import { Link } from "react-router-dom";

const SectionVII = () => {
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
        <h1 className="text-center text-white text-[35px]">Section VII</h1>
      </div>
      <div
        className="cursor-pointer mt-8 text-center mx-auto border
            rounded-lg border-grey max-w-[600px] space-y-4 text-[20px] mb-10 p-10"
      >
        <div className="font-extrabold text-[23px]">
          <Link to="/symbols">
            Academic Units in the School, College and Faculties{" "}
          </Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">School of Postgraduate Studies (SPGS).</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Faculty of Basic Medical Sciences (CMUL).</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Faculty of Clinical Sciences (CMUL).</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Faculty of Dental sciences (CMUL).</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Faculty of Arts.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Faculty of Education.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Faculty of Engineering.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Faculty of Environmental Sciences.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Faculty of Law.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Faculty of Management Sciences.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Faculty of Pharmacy.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Faculty of Social Sciences.</Link>
        </div>
      </div>
    </div>
  );
};

export default SectionVII;
