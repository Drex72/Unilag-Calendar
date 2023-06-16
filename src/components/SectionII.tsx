import { Link } from "react-router-dom";

const SectionII = () => {
    return (
        <div className=" pt-3 w-full ">
            <div>
                <img src={require("./unilag-logo.jpeg")} 
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
                <h1 className="text-center text-white text-[35px]">
                    Section II
                </h1>
            </div>
            <div className="cursor-pointer mt-8 text-center mx-auto border
            rounded-lg border-grey max-w-[600px] space-y-4 text-[20px] mb-10 p-10">
                <div className="font-extrabold text-[23px]"><Link to="/symbols">Authorities and Members of the University</Link></div>
                <div className="opacity-[.85]"><Link to="/symbols">Visitor and Principal Officers.</Link></div>
                <div className="opacity-[.85]"><Link to="/symbols">The Honourable Minister of Education.</Link></div>
                <div className="opacity-[.85]"><Link to="/symbols">Chancellors.</Link></div>
                <div className="opacity-[.85]"><Link to="/symbols">Pro-Chancellors and Chairman of Council.</Link></div>
                <div className="opacity-[.85]"><Link to="/symbols">Council Members.</Link></div>
                <div className="opacity-[.85]"><Link to="/symbols">Principal Officers.</Link></div>
                <div className="opacity-[.85]"><Link to="/symbols">Senate.</Link></div>
                <div className="opacity-[.85]"><Link to="/symbols">Congregation.</Link></div>
                <div className="opacity-[.85]"><Link to="/symbols">Provost and Deans.</Link></div>
                <div className="opacity-[.85]"><Link to="/symbols">Officers of the College of Medicine.</Link></div>
                <div className="opacity-[.85]"><Link to="/symbols">Convocation.</Link></div>
                <div className="opacity-[.85]"><Link to="/symbols">Honorary Awardees.</Link></div>
                <div className="opacity-[.85]"><Link to="/symbols">Emeritus Professors.</Link></div>
                <div className="opacity-[.85]"><Link to="/symbols">Distinguished Professors.</Link></div>
                <div className="opacity-[.85]"><Link to="/symbols">Gold Medalist.</Link></div>
            </div>
        </div>
    );
}
 
export default SectionII;