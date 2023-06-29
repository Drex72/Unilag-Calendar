
import React from 'react';
import MainLayout from '../Layout/MainLayout';
import TextHeading from '../TextHeading/TextHeading';
import { Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom'

export function AcademicUnit() {
    const navigate = useNavigate()
    return (
        <MainLayout>
            <Element name='AcademicUnit'>
                <TextHeading content='ACADEMIC UNITS IN THE SCHOOL, COLLEGE AND FACULTIES.' />
                <p>
                The Faculties and Departments provide a window into the academic programmes of the University of Lagos. Their evolution also directly mirrors the physical and academic development of the University since inception. Currently, the University has 12 Faculties, 94 Departments, 88 programmes in addition to the School of Postgraduate Studies. A brief history of each is provided below:
                </p>
            </Element>


            <div className='button-container'>

                    <button onClick={() => navigate('/sectionVII/ii')}>Next  - Faculty Of Basic Medical Sciences</button>
                </div>
        </MainLayout>
    );
}


export default AcademicUnit