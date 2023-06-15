import {AiOutlineHome} from "react-icons/ai"
import {BiGridSmall} from "react-icons/bi"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState<number | null>(null);//useState to select items on the Navbar one at a time
    
    
      const handleLinkClick = (index:any) => {
        setActiveLink(index);
        
      };

    return ( 
        <div className="flex">
            <div className=" w-[200px] flex flex-col border-r border-grey 
                space-y-10 pt-5 items-center text-center pb-10"
            >
                
                <div className="flex">
                    <Link to ="/">
                        <AiOutlineHome className="mt-1 text-[30px]"/>
                    </Link>
                </div>
                <Link to="/" className={`flex pr-2 hover:bg-purple hover:text-white 
                hover:py-2 hover:pl-7 hover:pr-10 hover:rounded transition ease-in-out hover:delay-100
                ${activeLink===0 ?"bg-purple py-2 pl-7 pr-[40px] text-white rounded":""} `}
                
                onClick={() => handleLinkClick(0)}
                >
                    <BiGridSmall className="mt-1"/>
                    <p>Section I</p>
                </Link>
                <Link to="/sectionII" className={`flex pr-2 hover:bg-purple hover:text-white
                hover:py-2 hover:pl-7 hover:pr-10 hover:rounded transition ease-in-out hover:delay-100
                ${activeLink===1 ?"bg-purple py-2 pl-7 pr-[40px] text-white rounded":""} `}
                
                onClick={() => handleLinkClick(1)}
                >
                    <BiGridSmall className="mt-1"/>
                    <p>Section II</p>
                </Link>
                <Link to="/sectionIII" className={`flex pr-2 hover:bg-purple hover:text-white
                hover:py-2 hover:pl-7 hover:pr-10 hover:rounded transition ease-in-out hover:delay-100
                ${activeLink===2 ?"bg-purple py-2 pl-7 pr-[40px] text-white rounded":""} `}
                
                onClick={() => handleLinkClick(2)}
                >
                    <BiGridSmall className="mt-1"/>
                    <p>Section III</p>
                </Link>
                <Link to="/sectionIV" className={`flex pr-2 hover:bg-purple hover:text-white 
                hover:py-2 hover:pl-7 hover:pr-10 hover:rounded transition ease-in-out hover:delay-100
                ${activeLink===3 ?"bg-purple py-2 pl-7 pr-[40px] text-white rounded":""} `}
                
                onClick={() => handleLinkClick(3)}
                >
                    <BiGridSmall className="mt-1"/>
                    <p>Section IV</p>
                </Link>
                <Link to="/sectionV" className={`flex pr-2 hover:bg-purple hover:text-white 
                hover:py-2 hover:pl-7 hover:pr-10 hover:rounded transition ease-in-out hover:delay-100
                ${activeLink===4 ?"bg-purple py-2 pr-[40px] pl-7  text-white rounded":""} `}
                
                onClick={() => handleLinkClick(4)}
                >
                    <BiGridSmall className="mt-1"/>
                    <p>Section V</p>
                </Link>
                <Link to="/sectionVI" className={`flex pr-2 hover:bg-purple hover:text-white 
                hover:py-2 hover:pl-7 hover:pr-10 hover:rounded transition ease-in-out hover:delay-100
                ${activeLink===5 ?"bg-purple py-2 pl-7 pr-[40px] text-white rounded":""} `}
                
                onClick={() => handleLinkClick(5)}
                >
                    <BiGridSmall className="mt-1"/>
                    <p>Section VI</p>
                </Link>
                <Link to="/sectionVII" className={`flex pr-2 hover:bg-purple hover:text-white 
                hover:py-2 hover:pl-7 hover:pr-10 hover:rounded transition ease-in-out hover:delay-100
                ${activeLink===6 ?"bg-purple py-2 pl-7 pr-[40px] text-white rounded":""} `}
                
                onClick={() => handleLinkClick(6)}
                >
                    <BiGridSmall className="mt-1"/>
                    <p>Section VII</p>
                </Link>
                <Link to="/sectionVIII" className={`flex pr-2 hover:bg-purple hover:text-white 
                hover:py-2 hover:pl-7 hover:pr-10 hover:rounded transition ease-in-out hover:delay-100
                ${activeLink===7 ?"bg-purple py-2 pl-7 pr-[40px] text-white rounded":""} `}
                
                onClick={() => handleLinkClick(7)}
                >
                    <BiGridSmall className="mt-1"/>
                    <p>Section VIII</p>
                </Link>
                <Link to="/sectionIX" className={`flex pr-2 hover:bg-purple hover:text-white 
                hover:py-2 hover:pl-7 hover:pr-10 hover:rounded transition ease-in-out hover:delay-100
                ${activeLink===8 ?"bg-purple py-2 pl-7 pr-[40px] text-white rounded":""} `}
                
                onClick={() => handleLinkClick(8)}
                >
                    <BiGridSmall className="mt-1"/>
                    <p>Section IX</p>
                </Link>
                <Link to="/sectionX" className={`flex pr-2 hover:bg-purple hover:text-white 
                hover:py-2 hover:pl-7 hover:pr-10 hover:rounded transition ease-in-out hover:delay-100
                ${activeLink===9 ?"bg-purple py-2 pl-7 pr-[40px] text-white rounded":""} `}
                
                onClick={() => handleLinkClick(9)}
                >
                    <BiGridSmall className="mt-1"/>
                    <p>Section X</p>
                </Link>
                <Link to="/sectionXI" className={`flex pr-2 hover:bg-purple hover:text-white 
                hover:py-2 hover:pl-7 hover:pr-10 hover:rounded transition ease-in-out hover:delay-100
                ${activeLink===10 ?"bg-purple py-2 pl-7 pr-[40px] text-white rounded":""} `}
                
                onClick={() => handleLinkClick(10)}
                >
                    <BiGridSmall className="mt-1"/>
                    <p>Section XI</p>
                </Link>
                <Link to="/sectionXII" className={`flex pr-2 hover:bg-purple hover:text-white 
                hover:py-2 hover:pl-7 hover:pr-10 hover:rounded transition ease-in-out hover:delay-100
                ${activeLink===11 ?"bg-purple py-2 pl-7 pr-[40px] text-white rounded":""} `}
                
                onClick={() => handleLinkClick(11)}
                >
                    <BiGridSmall className="mt-1"/>
                    <p>Section XII</p>
                </Link>
                <Link to="/sectionXIII" className={`flex pr-2 hover:bg-purple hover:text-white 
                hover:py-2 hover:pl-7 hover:pr-10 hover:rounded transition ease-in-out hover:delay-100
                ${activeLink===12 ?"bg-purple py-2 pl-7 pr-[40px] text-white rounded":""} `}
                
                onClick={() => handleLinkClick(12)}
                >
                    <BiGridSmall className="mt-1"/>
                    <p>Section XIII</p>
                </Link>
            </div>

            
            
            
            
        </div>
    );
}
 
export default Navbar;