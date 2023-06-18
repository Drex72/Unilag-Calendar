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
      <div className="cursor-pointer  mt-3  space-y-4 text-[18px] mb-10 p-10">
        <div className=" text-[21px]">
          <p className="text-black">Mace:</p>
        </div>

        <div className="text-[21px]">
          <span className="text-black">
            Motto: </span><span>In Deed and In truth
          </span>
        </div>
        <div className="text-[21px] flex">
          <p className="">Logo:</p>
          <img
            src={require("./unilag-logo.jpeg")}
            className="cursor-pointer h-[130px] w-[140px] -mt-3 ml-3"
            alt="Unilag Logo"
          />
        </div>

        <div className="">
          <p className="text-[21px]">Colors(by Faculties):</p>
          <div className="flex space-x-[50px]">
            <div className="flex flex-col">
              <div className="max-w-[300px] w-[100px] h-[100px] bg-[#800000]"></div>
              <div className="text-[20px]">UNILAG Maroon: #800000</div>
            </div>
            <div className="flex flex-col">
              <div className="max-w-[300px] w-[100px] h-[100px] bg-[#F9F295]"></div>
              <div className="text-[20px]">UNILAG Gold: #F9F295</div>
            </div>
            <div></div>
          </div>
          <p className="opacity-[.90]">
            <p className="text-[20px] opacity-100">
              The Faculty Colours as Approved by Senate on 25th July 2018
              (S.P.NO 2017/086) are:
            </p>
            School of Postgraduate Studies:
            <br /> College of Medicine:
            <br />
            Faculty of Arts: White
            <br /> Faculty of Basic Medical Sciences: Royal Blue
            <br />
            Faculty of Clinical Sciences: Royal Blue
            <br /> Faculty of Dental Sciences: Royal Blue
            <br /> Faculty of education: Light Yellow
            <br /> Faculty of Engineering: Orange
            <br /> Faculty of Environmental Sciences: Light Grey
            <br />
            Faculty of Law: Sky Blue
            <br /> Faculty of Management Sciences: Green.
            <br />
            Faculty of Pharmacy: Purple
            <br /> Faculty of Sciences: Golden Yellow
            <br />
            Faculty of Social Sciences: Mint Green.
          </p>
        </div>
        <div className="">
          <p className=" ">
            Vision: 
            <span className="opacity-[.90] text-center">
               To be a top-class institution for the pursuit of excellence in
              knowledge, character and service to humanity.
            </span>
          </p>
        </div>
        <div className="opacity-[.90]">
          <p>
            Mission: To provide a conducive environment for teaching, learning,
            research and development, where staff and students will interact and
            compete effectively with other counterparts globally
          </p>
        </div>
        <div className="opacity-[.90]">
          <p>
            Core Values: Commitment to Excellence in learning and character
            Conducive and friendly learning environment Integrity and Respect
            Continuous improvement of staff professionalism and competence
            Commitment to continuous improvement of all facilities Enforcement
            of innovative culture and Ethical conduct
          </p>
        </div>
        <div className="opacity-[.90]">
          <p>
            <p className="text-extrabold">UNILAG Anthem</p>
            <br />
            Verse 1:
            <br />
            University of Lagos,
            <br />
            the rising sun
            <br />
            A fountain of excellence
            <br />
            A Citadel of learning by the lagoon front
            <br />
            Home of sound minds
            <br />
            <p>--------------------</p>
            Chorus: <br />
            In deed and in truth
            <br />
            We rise beyond the skies
            <br />
            Our mission is to uphold our great heritage
            <br />
            We're the Nation's Pride.
            <br />
            <p>----------------------</p>
            Verse 2:
            <br />
            First choice in scholarship and excellence
            <br />
            Great in knowledge and character
            <br />
            Producing exemplary global leaders
            <br />
            GOD BLESS UNILAG
            <br />
            <p>----------------------</p>
            Chorus:
            <br />
            In deed and in truth
            <br />
            We rise beyond the skies
            <br />
            Our mission is to uphold our great heritage
            <br />
            We're the Nation's Pride.
            <br />
            <p>----------------------</p>
            Great Akokites! ✊🏽
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
