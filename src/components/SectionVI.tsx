const SectionVI = () => {
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
                    Section VI
                </h1>
            </div>
            <div className="cursor-pointer mt-8 text-center mx-auto border
            rounded-lg border-grey max-w-[600px] space-y-4 text-[20px] p-10">
                <div className="font-extrabold text-[23px]">General Regulations</div>
                <div className="opacity-[.85]">Admission Requirements.</div>
                <div className="opacity-[.85]">Regulations Governing First Degree Programmes.</div>
                <div className="opacity-[.85]">Regulations Governing the Conduct of Examinations .</div>
                <div className="opacity-[.85]">Regulations Governing Graduate Studies.</div>
            </div>
        </div>
    );
}
 
export default SectionVI;