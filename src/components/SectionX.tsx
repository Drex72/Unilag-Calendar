const SectionX = () => {
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
                    Section X
                </h1>
            </div>
            <div className="cursor-pointer mt-8 text-center mx-auto border
            rounded-lg border-grey max-w-[600px] space-y-4 text-[20px] mb-10 p-10">
                <div className="font-extrabold text-[23px]">Policies of the University</div>
                <div className="opacity-[.85]">Policy concerning the employment of pregnant women.</div>
                <div className="opacity-[.85]">Policy on Staff Development Pattern.</div>
                <div className="opacity-[.85]">Policy on Mandatory Drug Test for newly admitted Students.</div>
                <div className="opacity-[.85]">Policy on Boys Quarters Allocation.</div>
                <div className="opacity-[.85]">Dress code for students of the University of Lagos.</div>
                <div className="opacity-[.85]">Policy on Staff and Student Relationship/Responsibilities.</div>
                <div className="opacity-[.85]">Cell Phone Usage policy.</div>
                <div className="opacity-[.85]">Plagiarism Policy.</div>
                <div className="opacity-[.85]">Equal Opportunity Policy.</div>
                <div className="opacity-[.85]">Whistleblowing Policy.</div>
                <div className="opacity-[.85]">UNILAG Policy on Sexual harassment, sexual and romantic relationship/Draft rape information for rape victim.</div>
                <div className="opacity-[.85]">Fire safety Policy</div>
                <div className="opacity-[.85]">Ventures.</div>
            </div>
        </div>
    );
}
 
export default SectionX
;