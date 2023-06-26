import { AiOutlineHome } from "react-icons/ai"
import { BiGridSmall } from "react-icons/bi"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs"
import { BsChevronUp } from "react-icons/bs"
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState<number | null>(null);//useState to select items on the Navbar one at a time

    const [isOpen, setIsOpen] = useState<boolean[]>([false]);


    const handleLinkClick = (index: any) => {
        setActiveLink(index);
        setIsOpen((prevOpenSections) => {
            const newOpenSections = [...prevOpenSections];
            newOpenSections[index] = !newOpenSections[index];
            return newOpenSections;
        });
    };

    return (
        <div className="flex min-h-screen">
            <div className=" w-[200px] flex flex-col border-r border-grey 
                space-y-10 pt-5 items-center text-center pb-10"
            >

                <div className="flex">
                    <Link to="/">
                        <AiOutlineHome className="mt-1 text-[30px]" />
                    </Link>
                </div>

                {/********  Section I **********/}
                <Link to="#" className={`flex pr-2 hover:bg-purple hover:text-white space-x-3
                hover:py-2 hover:pl-7 hover:pr-10 hover:rounded transition ease-in-out hover:delay-100
                ${activeLink === 0 ? "bg-purple py-2 pl-7 pr-[28px] text-white rounded" : ""} `}

                    onClick={() => handleLinkClick(0)}
                >
                    <p>Section I</p>
                    <div className="mt-[5px]">
                        {isOpen[0] ? <BsChevronUp /> : <BsChevronDown />}
                    </div>
                </Link>
                {isOpen[0] ?
                    (<ul className="transition delay-700 duration-300 ease-in-out space-y-2">
                        <li className="opacity-[.85] hover:underline"><Link to="/sectionI/i">History of the University.</Link></li>
                        <li className="opacity-[.85] hover:underline"><Link to="/sectionI/ii">Development and Structure of the University.</Link></li>
                    </ul>) :
                    ""
                }

                {/******* Section II ********/}
                <Link to="#" className={`flex pr-2 hover:bg-purple hover:text-white space-x-3
                hover:py-2 hover:pl-7 hover:pr-8 hover:rounded transition ease-in-out hover:delay-100
                ${activeLink === 1 ? "bg-purple py-2 pl-7 pr-[28px] text-white rounded" : ""} `}

                    onClick={() => handleLinkClick(1)}
                >
                    <p>Section II</p>
                    <div className="mt-[5px]">
                        {isOpen[1] ? <BsChevronUp /> : <BsChevronDown />}
                    </div>
                </Link>
                {isOpen[1] ?
                    (<div className="space-y-3 p-3">
                        <div className="opacity-[.85] hover:underline"><ScrollLink to="authorities" smooth={true} duration={500}><Link to="sectionII/i">Authorities and Members of the University.</Link></ScrollLink></div>
                        <div className="opacity-[.85] hover:underline"><ScrollLink to="visitors" smooth={true} duration={500}><Link to="sectionII/i">Visitor and Principal Officers.</Link></ScrollLink></div>
                        <div className="opacity-[.85] hover:underline"><ScrollLink to="honorable" smooth={true} duration={500}><Link to="/sectionII/i">The Honourable Minister of Education.</Link></ScrollLink></div>
                        <div className="opacity-[.85] hover:underline"><ScrollLink to="chancellors" smooth={true} duration={500}><Link to="/sectionII/i">Chancellors.</Link></ScrollLink></div>
                        <div className="opacity-[.85] hover:underline"><ScrollLink to="pro-chancellors" smooth={true} duration={500}><Link to="/sectionII/i">Pro-Chancellors and Chairman of Council.</Link></ScrollLink></div>
                        <div className="opacity-[.85] hover:underline"><ScrollLink to="council-members" smooth={true} duration={500}><Link to="/sectionII/i">Council Members.</Link></ScrollLink></div>
                        <div className="opacity-[.85] hover:underline"><ScrollLink to="principal-officers" smooth={true} duration={500}><Link to="/sectionII/i">Principal Officers.</Link></ScrollLink></div>
                        <div className="opacity-[.85] hover:underline"><ScrollLink to="senate" smooth={true} duration={500}><Link to="/sectionII/i">Senate.</Link></ScrollLink></div>
                        <div className="opacity-[.85] hover:underline"><ScrollLink to="congregation" smooth={true} duration={500}><Link to="/sectionII/i">Congregation.</Link></ScrollLink></div>
                        <div className="opacity-[.85] hover:underline"><ScrollLink to="provost-and-deans" smooth={true} duration={500}><Link to="/sectionII/i">Provost and Deans.</Link></ScrollLink></div>
                        <div className="opacity-[.85] hover:underline"><ScrollLink to="officers" smooth={true} duration={500}><Link to="/sectionII/i">Officers of the College of Medicine.</Link></ScrollLink></div>
                        <div className="opacity-[.85] hover:underline"><ScrollLink to="convocation" smooth={true} duration={500}><Link to="/sectionII/i">Convocation.</Link></ScrollLink></div>
                        <div className="opacity-[.85] hover:underline"><ScrollLink to="honorary-awardees" smooth={true} duration={500}><Link to="/sectionII/i">Honorary Awardees.</Link></ScrollLink></div>
                        <div className="opacity-[.85] hover:underline"><ScrollLink to="emeritus-professors" smooth={true} duration={500}><Link to="/sectionII/i">Emeritus Professors.</Link></ScrollLink></div>
                        <div className="opacity-[.85] hover:underline"><ScrollLink to="distinguished-professors" smooth={true} duration={500}><Link to="/sectionII/i">Distinguished Professors.</Link></ScrollLink></div>
                        <div className="opacity-[.85] hover:underline"><ScrollLink to="gold-medallist" smooth={true} duration={500}><Link to="/sectionII/i">Gold Medalist.</Link></ScrollLink></div>
                    </div>) :
                    ""
                }
                <Link to="/symbols" className={`flex pr-2 hover:bg-purple hover:text-white space-x-3
                hover:py-2 hover:pl-7 hover:pr-10 hover:rounded transition ease-in-out hover:delay-100
                ${activeLink === 2 ? "bg-purple py-2 pl-7 pr-[28px] text-white rounded" : ""} `}

                    onClick={() => handleLinkClick(2)}
                >
                    <p>Section III</p>
                    <div className="mt-[5px]">
                        {isOpen[2] ? <BsChevronUp /> : <BsChevronDown />}
                    </div>
                </Link>
                {isOpen[2] ?
                    (<div className="space-y-3 p-3">
                        <div className="opacity-[.85] hover:underline"><Link to="/symbols">Notes on University Administration.</Link></div>
                        <div className="opacity-[.85] hover:underline"><Link to="/symbols">Vice-Chancellor's Office.</Link></div>
                        <div className="opacity-[.85] hover:underline"><Link to="/symbols">Registry.</Link></div>
                        <div className="opacity-[.85] hover:underline"><Link to="/symbols">Bursary.</Link></div>
                        <div className="opacity-[.85] hover:underline"><Link to="/symbols">Library.</Link></div>
                        <div className="opacity-[.85] hover:underline"><Link to="/symbols">Works & Physical Planning Department.</Link></div>
                        <div className="opacity-[.85] hover:underline"><Link to="/symbols">Dean of Student Affairs Unit.</Link></div>
                        <div className="opacity-[.85] hover:underline"><Link to="/symbols">Academic Planning Unit.</Link></div>
                        <div className="opacity-[.85] hover:underline"><Link to="/symbols">Counselling Unit.</Link></div>
                        <div className="opacity-[.85] hover:underline"><Link to="/symbols">Staff Training and Development Centre.</Link></div>
                        <div className="opacity-[.85] hover:underline"><Link to="/symbols">Security Unit.</Link></div>
                        <div className="opacity-[.85] hover:underline"><Link to="/symbols">Corporate Affairs Directorate.</Link></div>
                        <div className="opacity-[.85 hover:underline"><Link to="/symbols">Quality Assurance and SERVICOM Unit.</Link></div>
                        <div className="opacity-[.85] hover:underline"><Link to="/symbols">Office of Endowment.</Link></div>
                    </div>) :
                    ""
                }
                <Link to="/symbols" className={`flex pr-2 hover:bg-purple hover:text-white space-x-3
                hover:py-2 hover:pl-7 hover:pr-10 hover:rounded transition ease-in-out hover:delay-100
                ${activeLink === 3 ? "bg-purple py-2 pl-7 pr-[40px] text-white rounded" : ""} `}

                    onClick={() => handleLinkClick(3)}
                >
                    <p>Section IV</p>
                    <div className="mt-[5px]">
                        {isOpen[3] ? <BsChevronUp /> : <BsChevronDown />}
                    </div>
                </Link>
                {isOpen[3] ?
                    (<div className="space-y-3 p-3">
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Boards and Committees of the University.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Boards and Committees of Council.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Boards and Committees of Senate.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Committees of Management.</Link>
                        </div>
                    </div>) :
                    ""
                }
                <Link to="/symbols" className={`flex pr-2 hover:bg-purple hover:text-white space-x-3
                hover:py-2 hover:pl-7 hover:pr-8 hover:rounded transition ease-in-out hover:delay-100
                ${activeLink === 4 ? "bg-purple py-2 pr-[26px] pl-7  text-white rounded" : ""} `}

                    onClick={() => handleLinkClick(4)}
                >
                    <p>Section V</p>
                    <div className="mt-[5px]">
                        {isOpen[4] ? <BsChevronUp /> : <BsChevronDown />}
                    </div>
                </Link>
                {isOpen[4] ?
                    (<div className="space-y-3 p-3">
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">
                                List of Academic, Administrative and Technical Staff.
                            </Link>
                        </div>
                    </div>) :
                    ""
                }
                {/******* Section VI *******/}
                <Link to="/symbols" className={`flex pr-2 hover:bg-purple hover:text-white space-x-3
                hover:py-2 hover:pl-7 hover:pr-10 hover:rounded transition ease-in-out hover:delay-100
                ${activeLink === 5 ? "bg-purple py-2 pl-7 pr-[40px] text-white rounded" : ""} `}

                    onClick={() => handleLinkClick(5)}
                >
                    <p>Section VI</p>
                    <div className="mt-[5px]">
                        {isOpen[5] ? <BsChevronUp /> : <BsChevronDown />}
                    </div>
                </Link>
                {isOpen[5] ?
                    (<div className="space-y-3 p-3">

                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">General Regulations.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Admission Requirements.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline]">
                            <Link to="/symbols">
                                Regulations Governing First Degree Programmes.
                            </Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">
                                Regulations Governing the Conduct of Examinations.
                            </Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Regulations Governing Graduate Studies.</Link>
                        </div>

                    </div>) :
                    ""
                }
                {/****** Section VII ******/}
                <Link to="/symbols" className={`flex pr-2 hover:bg-purple hover:text-white space-x-3
                hover:py-2 hover:pl-7 hover:pr-10 hover:rounded transition ease-in-out hover:delay-100
                ${activeLink === 6 ? "bg-purple py-2 pl-7 pr-[40px] text-white rounded" : ""} `}

                    onClick={() => handleLinkClick(6)}
                >
                    <p>Section VII</p>
                    <div className="mt-[5px]">
                        {isOpen[6] ? <BsChevronUp /> : <BsChevronDown />}
                    </div>
                </Link>
                {isOpen[6] ?
                    (<div className="space-y-3 p-3">

                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">
                                Academic Units in the School, College and Faculties.
                            </Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">School of Postgraduate Studies (SPGS).</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Faculty of Basic Medical Sciences (CMUL).</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Faculty of Clinical Sciences (CMUL).</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Faculty of Dental sciences (CMUL).</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline]">
                            <Link to="/symbols">Faculty of Arts.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Faculty of Education.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Faculty of Engineering.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Faculty of Environmental Sciences.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Faculty of Law.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Faculty of Management Sciences.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Faculty of Pharmacy.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Faculty of Social Sciences.</Link>
                        </div>
                    </div>
                    ) :
                    ""
                }
                {/******  Section VIII ******/}
                <Link to="#" className={`flex pr-2 hover:bg-purple hover:text-white space-x-3
                hover:py-2 hover:pl-7 hover:pr-10 hover:rounded transition ease-in-out hover:delay-100
                ${activeLink === 7 ? "bg-purple py-2 pl-7 pr-[40px] text-white rounded" : ""} `}

                    onClick={() => handleLinkClick(7)}
                >
                    <p>Section VIII</p>
                    <div className="mt-[5px]">
                        {isOpen[7] ? <BsChevronUp /> : <BsChevronDown />}
                    </div>
                </Link>
                {isOpen[7] ?
                    (<div className="space-y-3 p-4">
                        <div className="opacity-[.85] hover:underline">
                            <ScrollLink to="Institutes" smooth={true} duration={500}>
                                <Link to="sectionVIII"> Institutes and Research Centres.</Link>
                            </ScrollLink>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <ScrollLink to="Academic" smooth={true} duration={500}>
                                <Link to="sectionVIII"> Academic Publishing Centre (APC). </Link>
                            </ScrollLink>
                        </div>

                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                Arthur Mbanefo Centre.
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                ARUA Centre of Excellence for Habitable & Sustainable Cities.
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                Centre for African Regional Integration of Border Studies.
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                Centre for Autism and Neurodevelopmental Disorders (CAN-DO).
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                Centre for Business Law and Policy (CBLP).
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                Centre for Digital Humanities.
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                Centre for Economic Policy Analysis and Research (CEPAR).
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                Centre for Entrepreneurship.
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                Centre for Environmental Human Resources Development (CENHURD).
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                Centre for Genomics of Non Communicable Diseases and Personalized
                                Health Care (CGNPH).
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                Centre for Human and Zoonotic Virology (CHAZVY).
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                Centre for Infection Control and Patient Safety (CICAPS).
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                Centre for Information Technology and Systems (CITS).
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                Centre for Malaria Research, Diagnostics, Training & Policy
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                Centre for Multi-modal Transport Studies (CMTS).
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                Centre for Neurology Studies.
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                Confucius Institute.
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                Entrepreneurship and Skill Development Centre / ARUA.
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                Centre of Excellence for Unemployment and Skills Development.
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                Human Resources and Development Centre (HRDC).
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                Institute of African and Diaspora Studies (IADS).
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                Institute of Continuing Education (ICE).
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                Institute of Maritime Studies.
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                Institute of Nigeria- China Development Studies.
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                National Centre for Energy Efficiency and Conservation
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                NITDA Information Technology Hub.
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                TETFUND Centre of Excellence for Urology and Kidney Research and
                                Training (TCEUKRT) .
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                TETFUND Centre of Excellence in Biodiversity, Conservation and
                                Ecosystem Management.
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                West African Regional Research and Training Centre for Low Vision
                                and Rehabilitation (WARTCLOR).
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                World Bank Centre of Excellence for Drug Research, Herbal Medicine
                                Development & Regulatory Science (ACEDHARS).
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                World Bank Centre of Excellence in Multimedia and Cinematography
                                (COEX).
                            </Link>
                        </div>
                        <div>
                            <Link to="/symbols" className="opacity-[.85] hover:underline">
                                World Bank Sustainable Procurement, Environmental and Social
                                Standards Centre of Excellence (SPESSCE).
                            </Link>
                        </div>
                    </div>
                    ) :
                    ""
                }
                {/* ****** Section IX ******* */}
                <Link to="/symbols" className={`flex pr-2 hover:bg-purple hover:text-white space-x-3
                hover:py-2 hover:pl-7 hover:pr-10 hover:rounded transition ease-in-out hover:delay-100
                ${activeLink === 8 ? "bg-purple py-2 pl-7 pr-[40px] text-white rounded" : ""} `}

                    onClick={() => handleLinkClick(8)}
                >
                    <p>Section IX</p>
                    <div className="mt-[5px]">
                        {isOpen[8] ? <BsChevronUp /> : <BsChevronDown />}
                    </div>
                </Link>

                {isOpen[8] ?
                    (<div className="space-y-3 p-3">


                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Strategic Units.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Research and Innovations.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">
                                International Relations, Partnerships and Prospects.
                            </Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Alumni and External Relations.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Unilag Business School.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">School of Foundation Studies.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Microfinance Bank Ltd.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Academic Publishing Centre.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Radio Unilag.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Unilag TV.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Unilag Property and Development Unit (PDU).</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Unilag Consult Ltd.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Pharmacy.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Ventures.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Guest Houses.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Press.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Unilag Bookshop.</Link>
                        </div>
                    </div>
                    ) :
                    ""
                }

                {/* *****Section X***** */}
                <Link to="/symbols" className={`flex pr-2 hover:bg-purple hover:text-white space-x-3
                hover:py-2 hover:pl-7 hover:pr-10 hover:rounded transition ease-in-out hover:delay-100
                ${activeLink === 9 ? "bg-purple py-2 pl-7 pr-[40px] text-white rounded" : ""} `}

                    onClick={() => handleLinkClick(9)}
                >
                    <p>Section X</p>
                    <div className="mt-[5px]">
                        {isOpen[9] ? <BsChevronUp /> : <BsChevronDown />}
                    </div>
                </Link>
                {isOpen[9] ?
                    (<div className="space-y-4 p-3">
                        <div className="opacity-[.85] hover:underline"><Link to="/symbols">Policies of the University.</Link></div>
                        <div className="opacity-[.85] hover:underline"><Link to="/symbols">Policy concerning the employment of pregnant women.</Link></div>
                        <div className="opacity-[.85] hover:underline"><Link to="/symbols">Policy on Staff Development Pattern.</Link></div>
                        <div className="opacity-[.85] hover:underline"><Link to="/symbols">Policy on Mandatory Drug Test for newly admitted Students.</Link></div>
                        <div className="opacity-[.85] hover:underline"><Link to="/symbols">Policy on Boys Quarters Allocation.</Link></div>
                        <div className="opacity-[.85] hover:underline"><Link to="/symbols">Dress code for students of the University of Lagos.</Link></div>
                        <div className="opacity-[.85] hover:underline"><Link to="/symbols">Policy on Staff and Student-Relationship Responsibilities.</Link></div>
                        <div className="opacity-[.85] hover:underline"><Link to="/symbols">Cell Phone Usage policy.</Link></div>
                        <div className="opacity-[.85] hover:underline"><Link to="/symbols">Plagiarism Policy.</Link></div>
                        <div className="opacity-[.85] hover:underline"><Link to="/symbols">Equal Opportunity Policy.</Link></div>
                        <div className="opacity-[.85] hover:underline"><Link to="/symbols">Whistleblowing Policy.</Link></div>
                        <div className="opacity-[.85] hover:underline"><Link to="/symbols">CUNILAG Policy on Sexual harassment, sexual and romantic relationship/Draft rape information for rape victim.</Link></div>
                        <div className="opacity-[.85 hover:underline"><Link to="/symbols">Fire safety Policy.</Link></div>
                        <div className="opacity-[.85] hover:underline"><Link to="/symbols">Ventures.</Link></div>
                    </div>) :
                    ""
                }


                {/* *****Section XI***** */}
                <Link to="#" className={`flex pr-2 hover:bg-purple hover:text-white space-x-3
                hover:py-2 hover:pl-7 hover:pr-10 hover:rounded transition ease-in-out hover:delay-100
                ${activeLink === 10 ? "bg-purple py-2 pl-7 pr-[40px] text-white rounded" : ""} `}

                    onClick={() => handleLinkClick(10)}
                >
                    <p>Section XI</p>
                    <div className="mt-[5px]">
                        {isOpen[10] ? <BsChevronUp /> : <BsChevronDown />}
                    </div>
                </Link>
                {isOpen[10] ?
                    (<div className="space-y-4 p-3">
                        <div className="fopacity-[.85] hover:underline">
                            {/* <Link to="/symbols">
                            Welfare policies for University Staff and Student.
                        </Link> */}
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/sectionXI/i">Housing Unit and Staff Quarters.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/sectionXI/ii">Medical Centre and Health Insurance Scheme.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/sectionXI/iii">Sports Centre.</Link>
                        </div>

                        <div className="opacity-[.85] hover:underline">
                            <Link to="/sectionXI/iv">Places of worship.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline]">
                            <Link to="/sectionXI/v">University of Lagos Staff School.</Link>
                        </div>
                        <div className="oopacity-[.85] hover:underline">
                            <Link to="/symbols">PInternational School, University of Lagos.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">
                                University of Lagos Women Society's Creche, Nursery and Primary
                                School.
                            </Link>
                        </div>
                        <div className="oopacity-[.85] hover:underline">
                            <Link to="/symbols">DSA's Office.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Scholarships and Bursaries.</Link>
                        </div>
                        <div className="oopacity-[.85] hover:underline">
                            <Link to="/symbols">Prizes and Medals.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">
                                Support for People Living with Disabilities (PLWDs).
                            </Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Work Study.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Halls of Residence.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Students Union and Associations.</Link>
                        </div>
                    </div>) :
                    ""
                }
                {/* ***Section XII ***** */}
                <Link to="#" className={`flex pr-2 hover:bg-purple hover:text-white space-x-3
                hover:py-2 hover:pl-7 hover:pr-10 hover:rounded transition ease-in-out hover:delay-100
                ${activeLink === 11 ? "bg-purple py-2 pl-7 pr-[40px] text-white rounded" : ""} `}

                    onClick={() => handleLinkClick(11)}
                >
                    <p>Section XII</p>
                    <div className="mt-[5px]">
                        {isOpen[11] ? <BsChevronUp /> : <BsChevronDown />}
                    </div>
                </Link>
                {isOpen[11] ?
                    (<div className="space-y-4 p-3">
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/sectionXII">Alumni and Endowment Activities</Link>
                        </div>
                    </div>) :
                    ""
                }
                {/* *****Section XIII ****** */}
                <Link to="/symbols" className={`flex pr-2 hover:bg-purple hover:text-white space-x-3
                hover:py-2 hover:pl-7 hover:pr-10 hover:rounded transition ease-in-out hover:delay-100
                ${activeLink === 12 ? "bg-purple py-2 pl-7 pr-[40px] text-white rounded" : ""} `}

                    onClick={() => handleLinkClick(12)}
                >
                    <p>Section XIII</p>
                    <div className="mt-[5px]">
                        {isOpen[12] ? <BsChevronUp /> : <BsChevronDown />}
                    </div>
                </Link>
                {isOpen[12] ?
                    (<div className="space-y-4 p-3">
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">University of Lagos Act</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Appendices.</Link>
                        </div>
                        <div className="opacity-[.85] hover:underline">
                            <Link to="/symbols">Index.</Link>
                        </div>
                    </div>) :
                    ""
                }
            </div>





        </div>
    );
}

export default Navbar;