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
                <div className="font-extrabold text-[23px]">Authorities and Members of the University</div>
                <div className="opacity-[.85]">Visitor and Principal Officers.</div>
                <div className="opacity-[.85]">The Honourable Minister of Education.</div>
                <div className="opacity-[.85]">Chancellors.</div>
                <div className="opacity-[.85]">TPro-Chancellors and Chairman of Council.</div>
                <div className="opacity-[.85]">Council Members.</div>
                <div className="opacity-[.85]">Principal Officers.</div>
                <div className="opacity-[.85]">Senate.</div>
                <div className="opacity-[.85]">Congregation.</div>
                <div className="opacity-[.85]">Provost and Deans.</div>
                <div className="opacity-[.85]">Officers of the College of Medicine.</div>
                <div className="opacity-[.85]">Convocation.</div>
                <div className="opacity-[.85]">Honorary Awardees.</div>
                <div className="opacity-[.85]">Emeritus Professors.</div>
                <div className="opacity-[.85]">Distinguished Professors.</div>
                <div className="opacity-[.85]">Gold Medalist.</div>
            </div>
        </div>
    );
}
 
export default SectionII;