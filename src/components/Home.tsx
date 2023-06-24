import MissionAndColors from "./MissionAndColors/MissionAndColors";
import SchoolAnthem from "./SchoolAnthem/SchoolAnthem";
import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <div className="pt-3 w-full h-screen overflow-y-scroll animate__animated animate__fadeIn ">
      <div >
        <img
          src={require("./unilag-logo.jpeg")}
          className="cursor-pointer h-[100px] w-[110px] ml-3"
          alt="Unilag Logo"
        />
        <div className="flex justify-center h-0">
          <h1 className="text-[40px] my-0 -translate-y-[80px]">
            University Calendar
          </h1>
        </div>
      </div>

      <div className="cursor-pointer  mt-1  space-y-4 text-[18px] ">
        <Hero />

        <div className="py-[10px] my-[1.5rem]">
          <div className="w-[90%] mx-auto flex items-center justify-center gap-8">
            <div className="flex flex-col gap-4 items-center">
              <div className="max-w-[200px] w-[100px] h-[100px] bg-[#800000] rounded-full"></div>
              UNILAG Maroon: #800000
            </div>

            <div className="flex flex-col gap-4 items-center">
              <div className="max-w-[200px] w-[100px] h-[100px] bg-[#F9F295] rounded-full"></div>
              UNILAG Gold: #F9F295
            </div>
          </div>
        </div>



        <MissionAndColors />

        <SchoolAnthem />


      </div>
    </div>
  );
};

export default Home;
