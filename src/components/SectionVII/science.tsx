import React from "react";
import MainLayout from "../Layout/MainLayout";
import TextHeading from "../TextHeading/TextHeading";
import { Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom'


export function Science() {

    const navigate = useNavigate()
    return (
        <MainLayout>
            <Element name='Science'>
                <TextHeading content='Science' />
                <p>
                The Faculties and Departments provide a window into the academic programmes of the University of Lagos. Their evolution also directly mirrors the physical and academic development of the University since inception. Currently, the University has 12 Faculties, 94 Departments, 88 programmes in addition to the School of Postgraduate Studies. A brief history of each is provided below:
                </p>
            </Element> 




            <div className='button-container'>
                    <button onClick={() => navigate('/sectionVII/x')}>Previous  - Faculty Of Pharmacy</button>

                    <button onClick={() => navigate('/sectionVII/xii')}>Next  - Faculty Of Social Sciences</button>
                </div>
        </MainLayout>
    );
}





export default Science