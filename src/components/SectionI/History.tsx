import React from 'react'
import { useNavigate } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import TextHeading from '../TextHeading/TextHeading';

const History = () => {
    const navigate = useNavigate()
    return (
        <MainLayout>
            <div className='history'>
                <TextHeading content='History of the University'/>

                <article className="history_content">
                    <p>
                        The establishment of the University of Lagos in 1962 was informed by the need to intensify the training of a professional workforce for a newly independent Nigeria in search of rapid industrialization and economic development. It became evident after independence that the country lacked the requisite workforce to actualize the dream of national development and modernization. The popular belief then was that the goal of modernisation and industrialisation   mm can only be achieved through the establishment of more universities.
                    </p>

                    <p>
                        Towards this end, the Federal Government established the Eric Ashby Commission on Post-School Certificate and Higher Education in Nigeria in May 1959. The Commission's report, entitled Investment in Education, recommended the establishment of a new university in Lagos, the then Federal Capital, to offer day and evening courses in Commerce, Business Administration, Economics and Higher Management Studies. In 1961, the Federal Government assigned the detailed planning of the new university to a UNESCO Advisory Commission.
                    </p>

                    <p>
                        However, whereas the Ashby Commission had envisaged a non-residential institution to be sighted in the business district of Central Lagos, the UNESCO Commission opted for a traditional university, "a complete all-encompassing institution" with residential accommodation on a large campus. Following the acceptance of the UNESCO Commission's report, the University of Lagos was established on October 22nd, 1962 on the authority of the University of Lagos Act of 1962.

                    </p>
                    <p>
                        The Act provided for an eleven-member Provisional Council for the University, a Senate to preside over academic affairs, and a separate Council for the Medical School located at the University Teaching Hospital at Idi-Araba, a few kilometres away from the main campus at Akoka.
                        This was rather unique for, by authority of the Act, the University consisted of two separate institutions: the main university and an autonomous Medical School. The link between the two institutions was tenuous, at best consisting of reciprocal representation on both Councils and membership of the University Senate by professors in the Medical School.

                        The University started with three faculties:

                        <ul>
                            <li>Commerce and Business Administration</li>
                            <li>Law</li>
                            <li>Medicine</li>
                        </ul>

                    </p>
                    <p>
                        At its first meeting, the Board of the Faculty of Commerce and Business changed the name to Faculty of Business and Social Studies. The Faculties of Arts, Education, Engineering and Science were added in 1964.

                        For the first academic session, 1962/1963, the University admitted 46 students to the Faculty of Business Administration and 26 to the Faculty of Law. These students received their first lectures on October 22nd, 1962 at the temporary site in a secondary school at Idi-Araba, adjacent to the Medical School and the Teaching Hospital. Twenty eight medical students had already commenced lectures three weeks earlier on October 3rd, 1962. The University moved from its temporary location in Idi-Araba to the Akoka main campus in September 1965. The direction of the Universitys future development was consolidated with the promulgation of the University of Lagos Decree No. 3 of 1967. The new constitution created an integrated and more structurally coherent institution by establishing a single Council for the whole university. The previous arrangement had made provision for two separate Councils, one for the University and the other for the Medical School.
                    </p>

                    <p>
                        With the new Act, the Medical School ceased to exist as a separate institution and became an integral part of the University of Lagos subject to the full authority of Senate. However, to ensure a measure of autonomy necessary for the smooth discharge of the responsibilities of some specialised units, the University adopted the collegiate system under which the Medical School became the College of Medicine. The Faculty of Business and Social Studies was divided into the School of Administration and the School of Social Studies. The Federal Advanced Teachers College was integrated into the university as the College of Education. The Institute of Computer Sciences and the Institute of Mass Communication were founded in 1967 and became teaching units a year later. The Institute of Child Health joined the University in 1969.
                    </p>

                    <p>
                        By the beginning of the 1970s, the University had developed an unwieldy and confusing academic structure in which the faculty system operated alongside the school and the collegiate systems. Law and Engineering were faculties; Education and Medicine were colleges, while Biological Sciences, Mathematical and Physical Sciences, Environmental Design, Social Studies, Administration, Humanities, and African Studies were schools. On 28 June 1973, Senate finally adopted the faculty system for the whole University, conceding the collegiate system only to the College of Medicine. The re-designation of the College of Education required a constitutional amendment. Following the promulgation of the University of Lagos (Amendment) Decree, 1975, it also became the Faculty of Education. The previous unwieldy system was thus transformed into the following Faculties: Arts, Business Administration, Education, Environmental Design, Science and Social Sciences. The College of Medicine retained both its name and its autonomy.
                    </p>

                    <p>
                        The School of Postgraduate Studies, whose dramatic growth has attracted the sobriquet, the Lagoon Lighthouse, was established on 22 July 1981. In 1984, Federal University of Technology, Abeokuta (FUTAB) was merged with the University of Lagos, and was subsequently renamed the College of Science and Technology, Abeokuta (COSTAB). However, it was demerged from the University in January 1988 to become Federal University of Agriculture, Abeokuta (FUNAAB).

                        The University of Lagos currently has a College of Medicine, School of Postgraduate Studies, a Distance Learning Institute (DLI) and twelve faculties, namely:
                        <ul>

                            <li>Arts</li>
                            <li>Basic Medical Sciences</li>
                            <li>Clinical Sciences</li>
                            <li>Dental Sciences</li>
                            <li>Education</li>
                            <li>Engineering</li>
                            <li>Environmental Sciences</li>
                            <li>Law</li>
                            <li>Management Sciences</li>
                            <li>Pharmacy</li>
                            <li>Science</li>
                            <li>Social Sciences</li>
                        </ul>
                    </p>

                    <p>
                        The University has built a legacy of academic excellence and is now acclaimed publicly as the University of First Choice and the Nation's Pride. The University has recorded landmark achievements in various fields since its inception in 1962.
                    </p>
                </article>
                <div className='button-container'>

                    <button onClick={() => navigate('/sectionI/ii')}>Next  - Development and Structure of the University</button>
                </div>

            </div>
        </MainLayout>
    );
}

export default History