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
                <div className="font-extrabold text-[23px]">Notes on University Administration</div>
                <div className="opacity-[.85]">Vice-Chancellor's Office.</div>
                <div className="opacity-[.85]">Registry.</div>
                <div className="opacity-[.85]">Bursary.</div>
                <div className="opacity-[.85]">Library.</div>
                <div className="opacity-[.85]">Works & Physical Planning Department.</div>
                <div className="opacity-[.85]">Dean of Student Affairs Unit.</div>
                <div className="opacity-[.85]">Academic Planning Unit.</div>
                <div className="opacity-[.85]">Counselling Unit.</div>
                <div className="opacity-[.85]">Staff Training and Development Centre.</div>
                <div className="opacity-[.85]">Security Unit.</div>
                <div className="opacity-[.85]">Corporate Affairs Directorate.</div>
                <div className="opacity-[.85]">Quality Assurance and SERVICOM Unit.</div>
                <div className="opacity-[.85]">Office of Endowment.</div>
            </div>
        </div>
    );
}
 
export default SectionIII;