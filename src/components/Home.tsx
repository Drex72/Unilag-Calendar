import { Link } from "react-router-dom";
import { BsFillSquareFill } from "react-icons/bs";

const Home = () => {
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
      <div className="mx-auto max-w-[600px] bg-purple rounded-lg p-2">
        <h1 className="text-center text-white text-[35px]">
          SYMBOLS OF AUTHORITY
        </h1>
      </div>
      <div className="cursor-pointer mt-3 text-center mx-auto max-w-[600px] space-y-4 text-[20px] mb-10 p-10">
        <div className=" text-[23px]">
          <Link to="/symbols">
            <p>Mace</p>
          </Link>
        </div>
        <div className=" text-[23px]">
          <Link to="/symbols">
          </Link>
        </div>
        <div className="text-[23px]">
          <Link to="/symbols">
            <p>Motto</p>
          </Link>
        </div>
        <div className=" text-[23px]">
          <Link to="/symbols" >
            <p>Colors(by Faculties)</p>
          </Link>
        </div>
        <div className="text-[23px]">
          <Link to="/symbols">
            <p>Vision</p>
          </Link>
        </div>
        <div className=" text-[23px]">
          <Link to="/symbols">
            <p>Mission</p>
          </Link>
        </div>
        <div className="text-[23px]">
          <Link to="/symbols">
            <p>Core Values</p>
          </Link>
        </div>
        <div className="text-[23px]">
          <Link to="/symbols">
            <p>University Anthem</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
