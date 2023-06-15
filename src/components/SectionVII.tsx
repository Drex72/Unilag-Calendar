const SectionVII = () => {
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
                    Section VII
                </h1>
            </div>
            <div className="cursor-pointer mt-8 text-center mx-auto border
            rounded-lg border-grey max-w-[600px] space-y-4 text-[20px] mb-10 p-10">
                <div className="font-extrabold text-[23px]">Academic Units in the School, College and Faculties </div>
                <div className="opacity-[.85]">School of Postgraduate Studies (SPGS).</div>
                <div className="opacity-[.85]">Faculty of Basic Medical Sciences (CMUL).</div>
                <div className="opacity-[.85]">Faculty of Clinical Sciences (CMUL).</div>
                <div className="opacity-[.85]">Faculty of Dental sciences (CMUL).</div>
                <div className="opacity-[.85]">Faculty of Arts.</div>
                <div className="opacity-[.85]">Faculty of Education.</div>
                <div className="opacity-[.85]">Faculty of Engineering.</div>
                <div className="opacity-[.85]">Faculty of Environmental Sciences.</div>
                <div className="opacity-[.85]">Faculty of Law.</div>
                <div className="opacity-[.85]">Faculty of Management Sciences.</div>
                <div className="opacity-[.85]">Faculty of Pharmacy.</div>
                <div className="opacity-[.85]">Faculty of Social Sciences.</div>
            </div>
        </div>
    );
}
 
export default SectionVII;