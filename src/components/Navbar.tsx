import { AiOutlineHome } from "react-icons/ai"
import { Link } from "react-router-dom";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs"
import { BsChevronUp } from "react-icons/bs"
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState<number | null>(null); //useState to select items on the Navbar one at a time

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
        <div className="flex h-screen overflow-y-scroll fixed">
            <div className=" w-[200px] flex flex-col border-r border-grey space-y-10 pt-5 items-center text-center pb-10" >
                <div className="flex">
                    <Link to="/">
                        <AiOutlineHome className="mt-1 text-[30px]" />
                    </Link>
                </div>

                {/********  Section I **********/}
                <>
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
                        (<div className="space-y-3 p-3">
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="history" smooth={true} duration={500}>
                                    <Link to="/sectionI">History of the University.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="development" smooth={true} duration={500}>
                                    <Link to="/sectionI">Development and Structure of the University.</Link>
                                </ScrollLink>
                            </div>
                        </div>) :
                        ""
                    }
                </>

                {/******* Section II ********/}
                <>
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
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="authorities" smooth={true} duration={500}>
                                    <Link to="sectionII">Authorities and Members of the University.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="visitors" smooth={true} duration={500}>
                                    <Link to="sectionII">Visitors.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="chancellors" smooth={true} duration={500}>
                                    <Link to="/sectionII">Chancellors.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="pro-chancellors" smooth={true} duration={500}>
                                    <Link to="/sectionII">Pro-Chancellors and Chairman of Council.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="council-members" smooth={true} duration={500}>
                                    <Link to="/sectionII">Council Members.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="principal-officers" smooth={true} duration={500}>
                                    <Link to="/sectionII">Principal Officers.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="senate" smooth={true} duration={500}>
                                    <Link to="/sectionII">Senate.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="congregation" smooth={true} duration={500}>
                                    <Link to="/sectionII">Congregation.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="provost-and-deans" smooth={true} duration={500}>
                                    <Link to="/sectionII">Provost and Deans.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="officers" smooth={true} duration={500}>
                                    <Link to="/sectionII">Officers of the College of Medicine.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="convocation" smooth={true} duration={500}>
                                    <Link to="/sectionII/i">Convocation.</Link></ScrollLink></div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="honorary-awardees" smooth={true} duration={500}>
                                    <Link to="/sectionII">Honorary Awardees.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="emeritus-professors" smooth={true} duration={500}>
                                    <Link to="/sectionII">Emeritus Professors.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="distinguished-professors" smooth={true} duration={500}>
                                    <Link to="/sectionII">Distinguished Professors.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="gold-medallist" smooth={true} duration={500}>
                                    <Link to="/sectionII">Gold Medalist.</Link>
                                </ScrollLink>
                            </div>
                        </div>) :
                        ""
                    }
                </>

                {/******* Section III ********/}
                <>
                    <Link to="#" className={`flex pr-2 hover:bg-purple hover:text-white space-x-3
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
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="NotesOnUniversityAdministration" smooth={true} duration={500}>
                                    <Link to="/sectionIII">Notes on University Administration.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="Vice-Chancellor's-Office" smooth={true} duration={500}>
                                    <Link to="/sectionIII">Vice-Chancellor's Office.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="Registry" smooth={true} duration={500}>
                                    <Link to="/sectionIII">Registry</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="Bursary" smooth={true} duration={500}>
                                    <Link to="/sectionIII">Bursary</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="Library" smooth={true} duration={500}>
                                    <Link to="/sectionIII">Library</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="WorksPhysicalPlanningDepartment" smooth={true} duration={500}>
                                    <Link to="/sectionIII">Works & Physical Planning Department.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="DeanofStudentAffairsUnit" smooth={true} duration={500}>
                                    <Link to="/sectionIII">Dean of Student Affairs Unit.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="AcademicPlanningUnit" smooth={true} duration={500}>
                                    <Link to="/sectionIII">Academic Planning Unit</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="CounsellingUnit" smooth={true} duration={500}>
                                    <Link to="/sectionIII">Counselling Unit</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="StaffTrainingandDevelopmentCentre" smooth={true} duration={500}>
                                    <Link to="/sectionIII">Staff Training and Development Centre</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="SecurityUnit" smooth={true} duration={500}>
                                    <Link to="/sectionIII">Security Unit</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="CorporateAffairsDirectorate" smooth={true} duration={500}>
                                    <Link to="/sectionIII">Corporate Affairs Directorate</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="QualityAssuranceAndSERVICOMUnit" smooth={true} duration={500}>
                                    <Link to="/sectionIII">Quality Assurance and SERVICOM Unit</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="OfficeOfEndowment" smooth={true} duration={500}>
                                    <Link to="/sectionIII">Office of Endowment</Link>
                                </ScrollLink>
                            </div>
                        </div>) :
                        ""
                    }
                </>

                {/******* Section IV ********/}
                <>
                    <Link to="#" className={`flex pr-2 hover:bg-purple hover:text-white space-x-3
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
                </>

                {/******* Section V ********/}
                <>
                    <Link to="#" className={`flex pr-2 hover:bg-purple hover:text-white space-x-3
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
                </>

                {/******* Section VI *******/}
                <>
                    <Link to="#" className={`flex pr-2 hover:bg-purple hover:text-white space-x-3
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
                                <ScrollLink to="general-regulations" smooth={true} duration={500}>
                                    <Link to="/sectionVI">General Regulations.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="admission-requirements" smooth={true} duration={500}>
                                    <Link to="/sectionVI">Admission Requirements.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="ENTRY-REQUIREMENTS-FOR-DEGREE-PROGRAMMES" smooth={true} duration={500}>
                                    <Link to="/sectionVI">Entry, Requirements for Degree Programmes.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="regulations-governing-first-degree-courses" smooth={true} duration={500}>
                                    <Link to="/sectionVI">Regulations Governing First Degree Programmes.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="regulations-governing-exam-conduct" smooth={true} duration={500}>
                                    <Link to="/sectionVI">Regulations Governing the Conduct of Examinations.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="regulations-governing-graduate-studies" smooth={true} duration={500}>
                                    <Link to="/sectionVI">Regulations Governing Graduate Studies.</Link>
                                </ScrollLink>
                            </div>

                        </div>) :
                        ""
                    }
                </>

                {/****** Section VII ******/}
                <>
                    <Link to="#" className={`flex pr-2 hover:bg-purple hover:text-white space-x-3
                hover:py-2 hover:pl-7 hover:pr-10 hover:rounded transition ease-in-out hover:delay-100
                ${activeLink === 6 ? "bg-purple py-2 pl-7 pr-[40px] text-white rounded" : ""} `}

                        onClick={() => handleLinkClick(6)}
                    >
                        <p>Sectin VII</p>
                        <div className="mt-[5px]">
                            {isOpen[6] ? <BsChevronUp /> : <BsChevronDown />}
                        </div>
                    </Link>
                    {isOpen[6] ?
                        (<div className="space-y-3 p-3">

                            <div className="opacity-[.85] hover:underline">
                                <Link to="/SectionVII/academic-unit">
                                    Academic Units in the School, College and Faculties.
                                </Link>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <Link to="/SectionVII/xiii">School of Postgraduate Studies (SPGS).</Link>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <Link to="/SectionVII/ii">Faculty of Basic Medical Sciences (CMUL).</Link>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <Link to="/SectionVII/iii">Faculty of Clinical Sciences (CMUL).</Link>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <Link to="/SectionVII/iv">Faculty of Dental sciences (CMUL).</Link>
                            </div>
                            <div className="opacity-[.85] hover:underline]">
                                <Link to="/SectionVII/i">Faculty of Arts.</Link>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <Link to="/SectionVII/v">Faculty of Education.</Link>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <Link to="/SectionVII/vi">Faculty of Engineering.</Link>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <Link to="/SectionVII/vii">Faculty of Environmental Sciences.</Link>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <Link to="/SectionVII/viii">Faculty of Law.</Link>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <Link to="/SectionVII/ix">Faculty of Management Sciences.</Link>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <Link to="/SectionVII/x">Faculty of Pharmacy.</Link>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <Link to="/SectionVII/xi">Faculty of Science.</Link>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <Link to="/SectionVII/xii">Faculty of Social Sciences.</Link>
                            </div>
                        </div>
                        ) :
                        ""
                    }
                </>

                {/******  Section VIII ******/}
                <>
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
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="Arthur" smooth={true} duration={500}>
                                    <Link to="sectionVIII"> Arthur Mbanefo Centre. </Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="ARUA" smooth={true} duration={500}>
                                    <Link to="sectionVIII">ARUA Centre of Excellence for Habitable & Sustainable Cities. </Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="Centre-for-African-Regional" smooth={true} duration={500}>
                                    <Link to="sectionVIII"> Centre for African Regional Integration of Border Studies.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="Centre-for-Autism-and-Neurodevelopmental" smooth={true} duration={500}>
                                    <Link to="sectionVIII"> Centre for Autism and Neurodevelopmental Disorders (CAN-DO).</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="Centre-for-Business-Law" smooth={true} duration={500}>
                                    <Link to="sectionVIII">Centre for Business Law and Policy (CBLP).</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="Centre-for-Digital-Humanities" smooth={true} duration={500}>
                                    <Link to="sectionVIII">Centre for Digital Humanities.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="Centre-for-Economic-Policy" smooth={true} duration={500}>
                                    <Link to="sectionVIII">Centre for Economic Policy Analysis and Research (CEPAR).</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="Centre-for-Entrepreneurship." smooth={true} duration={500}>
                                    <Link to="sectionVIII">Centre for Entrepreneurship.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="Centre-for-Environmental-Human" smooth={true} duration={500}>
                                    <Link to="sectionVIII">Centre for Environmental Human Resources Development (CENHURD).</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="Centre-for-Genomics" smooth={true} duration={500}>
                                    <Link to="sectionVIII">Centre for Genomics of Non Communicable Diseases and Personalized Health Care (CGNPH).</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="Centre-for-Human" smooth={true} duration={500}>
                                    <Link to="sectionVIII">Centre for Human and Zoonotic Virology (CHAZVY).</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="Centre-for-Infection" smooth={true} duration={500}>
                                    <Link to="sectionVIII">Centre for Infection Control and Patient Safety (CICAPS).</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="Centre-for-Information" smooth={true} duration={500}>
                                    <Link to="sectionVIII">Centre for Information Technology and Systems (CITS)</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="Centre-for-Malaria-Research" smooth={true} duration={500}>
                                    <Link to="sectionVIII">Centre for Malaria Research, Diagnostics, Training & Policy.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="Centre-for-Multi-modal" smooth={true} duration={500}>
                                    <Link to="sectionVIII">Centre for Multi-modal Transport Studies (CMTS).</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="Centre-for-Neurology-Studies." smooth={true} duration={500}>
                                    <Link to="sectionVIII">Centre for Neurology Studies.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="Confucius-Institute" smooth={true} duration={500}>
                                    <Link to="sectionVIII">Confucius Institute.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="Entrepreneurship-and-Skill" smooth={true} duration={500}>
                                    <Link to="sectionVIII">Entrepreneurship and Skill Development Centre / ARUA.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="Centre-for-Excellence" smooth={true} duration={500}>
                                    <Link to="sectionVIII">Centre of Excellence for Unemployment and Skills Development.</Link>
                                </ScrollLink>
                            </div>

                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="Human-Resources" smooth={true} duration={500}>
                                    <Link to="sectionVIII">Human Resources and Development Centre (HRDC).</Link>
                                </ScrollLink>
                            </div>

                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="CENTRE-FOR-HOUSING-AND-SUSTAINABLE-DEVELOPMENT" smooth={true} duration={500}>
                                    <Link to="sectionVIII">CENTRE FOR HOUSING AND SUSTAINABLE DEVELOPMENT</Link>
                                </ScrollLink>
                            </div>


                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="Institute-of-African" smooth={true} duration={500}>
                                    <Link to="sectionVIII">Institute of African and Diaspora Studies (IADS)</Link>
                                </ScrollLink>
                            </div>

                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="Institute-of-Continuing" smooth={true} duration={500}>
                                    <Link to="sectionVIII">Institute of Continuing Education (ICE).</Link>
                                </ScrollLink>
                            </div>

                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="Institute-of-Maritime-Studies" smooth={true} duration={500}>
                                    <Link to="sectionVIII">Institute of Maritime Studies.</Link>
                                </ScrollLink>
                            </div>

                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="Institute-of-Nigeria" smooth={true} duration={500}>
                                    <Link to="sectionVIII">Institute of Nigeria-China Development Studies.</Link>
                                </ScrollLink>
                            </div>

                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="National-Centre" smooth={true} duration={500}>
                                    <Link to="sectionVIII">National Centre for Energy Efficiency and Conservation</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="NITDA-Information" smooth={true} duration={500}>
                                    <Link to="sectionVIII">NITDA Information Technology Hub.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="TETFUND-Centre-of-Excellence-for-Urology" smooth={true} duration={500}>
                                    <Link to="sectionVIII">TETFUND Centre of Excellence for Urology and Kidney Research and Training (TCEUKRT) .</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="TETFUND-Centre-of-Excellence-in-Biodiversity" smooth={true} duration={500}>
                                    <Link to="sectionVIII">TETFUND Centre of Excellence in Biodiversity, Conservation and Ecosystem Management.</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="West-African-Regional-Research" smooth={true} duration={500}>
                                    <Link to="sectionVIII">West African Regional Research and Training Centre for Low Vision and Rehabilitation (WARTCLOR)</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="World-Bank-Centre-of-Excellence-for-Drug-Research" smooth={true} duration={500}>
                                    <Link to="sectionVIII">World Bank Centre of Excellence for Drug Research, Herbal Medicine Development & Regulatory Science (ACEDHARS).</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="World-Bank-Centre-of-Excellence-in-Multimedia" smooth={true} duration={500}>
                                    <Link to="sectionVIII">World Bank Centre of Excellence in Multimedia and Cinematography (COEX).</Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="World-Bank-Sustainable-Procurement" smooth={true} duration={500}>
                                    <Link to="sectionVIII">World Bank Sustainable Procurement, Environmental and Social Standards Centre of Excellence (SPESSCE).</Link>
                                </ScrollLink>
                            </div>
                        </div>
                        ) :
                        ""
                    }
                </>

                {/* ****** Section IX ******* */}
                <>
                    <Link to="#" className={`flex pr-2 hover:bg-purple hover:text-white space-x-3
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
                </>

                {/* *****Section X***** */}
                <>
                    <Link to="#" className={`flex pr-2 hover:bg-purple hover:text-white space-x-3
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
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="university-policies" smooth={true} duration={500}>
                                    <Link to="/sectionX">
                                        Policies of the University.
                                    </Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="policy-concerning-the-employment-of-pregnant-women" smooth={true} duration={500}>
                                    <Link to="/sectionX">
                                        Policy concerning the employment of pregnant women.
                                    </Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="policy-on-staff-development-pattern" smooth={true} duration={500}>
                                    <Link to="/sectionX">
                                        Policy on Staff Development Pattern.
                                    </Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="POLICY-ON-MANDATORY-DRUG-TEST-FOR-NEWLY-ADMITTED-STUDENTS" smooth={true} duration={500}>
                                    <Link to="/sectionX">
                                        Policy on Mandatory Drug Test for newly admitted Students.
                                    </Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="regulations-governing-graduate-studies" smooth={true} duration={500}>
                                    <Link to="/sectionX">
                                        Policy on Boys Quarters Allocation.
                                    </Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="regulations-governing-graduate-studies" smooth={true} duration={500}>
                                    <Link to="/sectionX">
                                        Dress code for students of the University of Lagos.
                                    </Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="regulations-governing-graduate-studies" smooth={true} duration={500}>
                                    <Link to="/sectionX">
                                        Policy on Staff and Student-Relationship Responsibilities.
                                    </Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="regulations-governing-graduate-studies" smooth={true} duration={500}>
                                    <Link to="/sectionX">
                                        Cell Phone Usage policy.
                                    </Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="regulations-governing-graduate-studies" smooth={true} duration={500}>
                                    <Link to="/sectionX">
                                        Plagiarism Policy.
                                    </Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="regulations-governing-graduate-studies" smooth={true} duration={500}>
                                    <Link to="/sectionX">
                                        Equal Opportunity Policy.
                                    </Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="regulations-governing-graduate-studies" smooth={true} duration={500}>
                                    <Link to="/sectionX">
                                        Whistleblowing Policy.
                                    </Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="regulations-governing-graduate-studies" smooth={true} duration={500}>
                                    <Link to="/sectionX">
                                        CUNILAG Policy on Sexual harassment, sexual and romantic relationship/Draft rape information for rape victim.
                                    </Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="regulations-governing-graduate-studies" smooth={true} duration={500}>
                                    <Link to="/sectionX">
                                        Fire safety Policy.
                                    </Link>
                                </ScrollLink>
                            </div>
                            <div className="opacity-[.85] hover:underline">
                                <ScrollLink to="regulations-governing-graduate-studies" smooth={true} duration={500}>
                                    <Link to="/sectionX">
                                        Ventures
                                    </Link>
                                </ScrollLink>
                            </div>

                        </div>) :
                        ""
                    }
                </>

                {/* *****Section XI***** */}
                <>
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
                </>

                {/* ***Section XII ***** */}
                <>
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
                </>

                {/* *****Section XIII ****** */}
                <>
                    <Link to="#" className={`flex pr-2 hover:bg-purple hover:text-white space-x-3
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
                </>
            </div>
        </div>
    );
}

export default Navbar;