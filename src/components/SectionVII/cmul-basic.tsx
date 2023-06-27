import React from "react";
import MainLayout from "../Layout/MainLayout";
import TextHeading from "../TextHeading/TextHeading";
import { Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom'






export function CmulBASIC() {

    const navigate = useNavigate()
    return (
        <MainLayout>
            <Element name='CMUL-BASIC'>
                <TextHeading content='Faculty of Basic Medical Sciences (CMUL).'/>
                <p>
                The Faculties and Departments provide a window into the academic programmes of the University of Lagos. Their evolution also directly mirrors the physical and academic development of the University since inception. Currently, the University has 12 Faculties, 94 Departments, 88 programmes in addition to the School of Postgraduate Studies. A brief history of each is provided below:
                </p>
            </Element>    



            <div className='button-container'>
                    <button onClick={() => navigate('/sectionVII/xiii')}>Previous  - School Of Postgraduate Studies</button>

                    <button onClick={() => navigate('/sectionVII/iii')}>Next  - Faculty Of Clinical Sciences</button>
                </div>    
        </MainLayout>
    );
}

export default CmulBASIC