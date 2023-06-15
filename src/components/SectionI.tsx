const SectionI = () => {
    return (
        <div className=" pt-3 w-full ">
            <div>
                <img src={require("./unilag-logo.jpeg")} 
                    className="h-[100px] w-[110px] ml-3 cursor-pointer" 
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
                    Section I
                </h1>
            </div>
            <div className="cursor-pointer mt-8 text-center mx-auto border
            rounded-lg border-grey max-w-[600px] space-y-4 text-[20px] p-10">
                <div className="font-extrabold text-[23px]">History and Development of the University</div>
                <div className="opacity-[.85]">History of the University.</div>
                <div className="opacity-[.85]">Development and Structure of the University.</div>
            </div>
        </div>
    );
} 
 
export default SectionI;