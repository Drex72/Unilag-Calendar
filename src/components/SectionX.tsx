import { Link } from "react-router-dom";

const SectionX = () => {
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
        <h1 className="text-center text-white text-[35px]">Section X</h1>
      </div>
      <div
        className="cursor-pointer mt-8 text-center mx-auto border
            rounded-lg border-grey max-w-[700px] space-y-4 text-[20px] mb-10 p-10"
      >
        <div className="font-extrabold text-[23px]">
          <Link to="/symbols">Policies of the University</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">
            Policy concerning the employment of pregnant women.
          </Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Policy on Staff Development Pattern.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">
            Policy on Mandatory Drug Test for newly admitted Students.
          </Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Policy on Boys Quarters Allocation.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">
            Dress code for students of the University of Lagos.
          </Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">
            Policy on Staff and Student Relationship/Responsibilities.
          </Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Cell Phone Usage policy.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Plagiarism Policy.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Equal Opportunity Policy.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Whistleblowing Policy.</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">
            UNILAG Policy on Sexual harassment, sexual and romantic
            relationship/Draft rape information for rape victim.
          </Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Fire safety Policy</Link>
        </div>
        <div className="opacity-[.85]">
          <Link to="/symbols">Ventures.</Link>
        </div>
      </div>
    </div>
  );
};

export default SectionX;
