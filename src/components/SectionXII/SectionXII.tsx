import React from 'react'
import { useNavigate } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import TextHeading from '../TextHeading/TextHeading';

const SectionXII = () => {
    const navigate = useNavigate()
    return (
        <MainLayout>
            <div className='history'>
                <TextHeading content='THE UNIVERSITY OF LAGOS ALUMNI ASSOCIATION AND EXTERNAL RELATIONS' />

                <article className="history_content">
                    <p>
                        All over the world, alumni associations contribute significantly to the develop of their alma mater. This could come in various forms. In many institutions, the representative of the Alumni Association is appointed into the Governing Council, such that the old students could also help in running the institution. They also help in providing or executing infrastructural or development projects, offering of scholarships to different categories of students, and development of human capital through seminars and workshops. And since the era of globalization began, they have also been helping to link their alma mater with local and international institutions and organisations in form of partnerships and linkages. The scope of the aims and objectives of the University of Lagos Alumni Association, as contained in the Alumni Constitution, reflect these concerns.
                        AIMS AND OBJECTIVES:
                    </p>

                    <ol>
                        <li>To provide a link between the University and its graduates through the University, Alumni Relations Office, and through them, the public in general.</li>
                        <li>To assist the University in whatever way possible in its development and in its drive to establish and maintain a tradition of excellence in all its endeavours.</li>
                        <li>To promote mutual understanding, co-operation, interaction and fraternal
                            relationship amongst the graduates of the university.</li>
                        <li>To advise the authorities of the University and the Federal Government on academic
                            matters in particular and on all matters relating to the well being of the entire
                            University community.</li>
                        <li>To establish a fund for the maintenance and promotion of scholarship and research
                            in the University of Lagos and to provide all necessary assistance in improving
                            student welfare in the University.</li>
                        <li>To arrange seminars, conferences and symposia on matters of contemporary interest
                            and to publish the proceedings and papers as may be deemed expedient.</li>
                        <li>To establish such magazines, periodical newsletter and other publications as it may
                            deem necessary for the achievement of its objects.</li>
                        <li>To confer, consult, maintain contact and co-operate with any persons, associations,
                            societies, institutions or bodies of persons established in Nigeria or elsewhere having
                            objectives in whole or in part similar to those of the Association.</li>
                        <li>To raise funds voluntarily and receive donations, gifts, grants and bequets from
                            members and the general public for financing any of the above objectives and most
                            especially to organize such fund-raising activities as may be decided upon by the
                            National Executive Committee.</li>
                        <li>To carry out the various aims and objectives through, inter alia, establishment of
                            standing committees when necessary, such committees shall include those on the.
                            following:

                            <ul>
                                <li>General Purposes</li>
                                <li>Education and Research</li>
                                <li>Publications</li>
                                <li>Finance</li>
                            </ul>

                        </li>
                        <li>To do all such things as the Association may consider to be in its interest or that of
                            the University of otherwise incidental or conducive to the achievement of any of the
                            above objectives.
                        </li>

                    </ol>

                    <p>
                        Membership of the Association is open to these four categories of people:
                        <ul>
                            <li>Holders of first, higher or honourary degrees of the University</li>
                            <li>Holders of the Nigerian Certificate of Education of the University</li>
                            <li>Holders of Diplomas of the University of Lagos after spending not less than 3month of an academic year.</li>
                            <li>Holders of any certificate approved by the Senate of the University.</li>
                        </ul>
                    </p>




                </article>
                <div className='button-container'>

                    <button onClick={() => navigate('/sectionI/ii')}>Next  - Development and Structure of the University</button>
                </div>

            </div>
        </MainLayout>
    );
}

export default SectionXII