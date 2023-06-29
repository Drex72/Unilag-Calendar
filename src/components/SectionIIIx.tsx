import { Link } from 'react-router-dom';

const SectionIII = () => {
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
                    Section III
                </h1>
            </div>
            <div className="cursor-pointer mt-8 text-center mx-auto border
            rounded-lg border-grey max-w-[600px] space-y-4 text-[20px] mb-10 p-10">
                <div className="font-extrabold text-[23px]"><Link to="/symbols">Notes on University Administration</Link></div>
                <div className="opacity-[.85]"><Link to="/symbols">Vice-Chancellor's Office.</Link></div>
                <div className="opacity-[.85]"><Link to="/symbols">Registry.</Link></div>
                <div className="opacity-[.85]"><Link to="/symbols">Bursary.</Link></div>
                <div className="opacity-[.85]"><Link to="/symbols">Library.</Link></div>
                <div className="opacity-[.85]"><Link to="/symbols">Works & Physical Planning Department.</Link></div>
                <div className="opacity-[.85]"><Link to="/symbols">Dean of Student Affairs Unit.</Link></div>
                <div className="opacity-[.85]"><Link to="/symbols">Academic Planning Unit.</Link></div>
                <div className="opacity-[.85]"><Link to="/symbols">Counselling Unit.</Link></div>
                <div className="opacity-[.85]"><Link to="/symbols">Staff Training and Development Centre.</Link></div>
                <div className="opacity-[.85]"><Link to="/symbols">Security Unit.</Link></div>
                <div className="opacity-[.85]"><Link to="/symbols">Corporate Affairs Directorate.</Link></div>
                <div className="opacity-[.85]"><Link to="/symbols">Quality Assurance and SERVICOM Unit.</Link></div>
                <div className="opacity-[.85]"><Link to="/symbols">Office of Endowment.</Link></div>
            </div>
        </div>
    );
}
 
export default SectionIII;