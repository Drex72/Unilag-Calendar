const SectionXI = () => {
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
                    Section XI
                </h1>
            </div>
            <div className="cursor-pointer mt-8 text-center mx-auto border
            rounded-lg border-grey max-w-[600px] space-y-4 text-[20px] mb-10 p-10">
                <div className="font-extrabold text-[23px]">Welfare policies for University Staff and Student</div>
                <div className="opacity-[.85]">Housing Unit and Staff Quarters.</div>
                <div className="opacity-[.85]">Medical Centre and Health Insurance Scheme.</div>
                <div className="opacity-[.85]">Sports Centre.</div>
                <div className="opacity-[.85]">Staff Unions.</div>
                <div className="opacity-[.85]">Cooperative Societies.</div>
                <div className="opacity-[.85]">Places of worship.</div>
                <div className="opacity-[.85]">University of Lagos Staff School.</div>
                <div className="opacity-[.85]">PInternational School, University of Lagos.</div>
                <div className="opacity-[.85]">University of Lagos Women Society's Creche, Nursery and Primary School.</div>
                <div className="opacity-[.85]">DSA's Office.</div>
                <div className="opacity-[.85]">Scholarships and Bursaries.</div>
                <div className="opacity-[.85]">Prizes and Medals.</div>
                <div className="opacity-[.85]">Support for People Living with Disabilities (PLWDs).</div>
                <div className="opacity-[.85]">Work Study.</div>
                <div className="opacity-[.85]">Halls of Residence.</div>
                <div className="opacity-[.85]">Students Union and Associations.</div>
            </div>
        </div>
    );
}
 
export default SectionXI
;