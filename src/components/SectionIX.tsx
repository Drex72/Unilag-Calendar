const SectionIX = () => {
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
            <div className="cursor-pointer mx-auto max-w-[300px] bg-purple rounded-lg p-2">
                <h1 className="text-center text-white text-[35px]">
                    Section IX
                </h1>
            </div>
            <div className="mt-8 text-center mx-auto border
            rounded-lg border-grey max-w-[600px] space-y-4 text-[20px] mb-10 p-10">
                <div className="font-extrabold text-[23px]">Strategic Units </div>
                <div className="opacity-[.85]">Research and Innovations.</div>
                <div className="opacity-[.85]">International Relations, Partnerships and Prospects .</div>
                <div className="opacity-[.85]">Alumni and External Relations.</div>
                <div className="opacity-[.85]">Unilag Business School.</div>
                <div className="opacity-[.85]">School of Foundation Studies.</div>
                <div className="opacity-[.85]">Microfinance Bank Ltd.</div>
                <div className="opacity-[.85]">Academic Publishing Centre.</div>
                <div className="opacity-[.85]">Radio Unilag.</div>
                <div className="opacity-[.85]">Unilag TV.</div>
                <div className="opacity-[.85]">Unilag Property and Development Unit (PDU).</div>
                <div className="opacity-[.85]">Unilag Consult Ltd.</div>
                <div className="opacity-[.85]">Pharmacy.</div>
                <div className="opacity-[.85]">Ventures.</div>
                <div className="opacity-[.85]">Guest Houses.</div>
                <div className="opacity-[.85]">Press.</div>
                <div className="opacity-[.85]">Unilag Bookshop.</div>
            </div>
        </div>
    );
}
 
export default SectionIX;