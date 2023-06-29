import React from "react";
import MainLayout from "../Layout/MainLayout";
import TextHeading from "../TextHeading/TextHeading";
import { Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom'

export function Pharmacy() {

    const navigate = useNavigate()
    return (
        <MainLayout>
            


            <Element name='Pharmacy'>
                <TextHeading content='FACULTY OF PHARMACY' />
                <p className="mt-5">The Faculty of Pharmacy started as a school in the College of Medicine in 1980. The foundation departments, namely Departments of Pharmaceutics and Pharmaceutical Technology, Pharmaceutical Chemistry and Pharmacognosy were based in the School of Basic Medical Sciences. On account of the interaction with the Pharmacy Board of Nigeria (Now Pharmacists Council of Nigeria), the regulatory body in charge of pharmacy education, there were changes not only in the teaching and research facilities but also curriculum and programme expansion. In 1984, the School was restructured to include a fourth Department, namely Clinical Pharmacy and Biopharmacy.  The School was officially recognized by the Pharmacy Board in May 1984 as an academic institution for the training of degree holders in Pharmacy. The first set of students graduated in July 1984. All the Departments have, over the years, expanded their programmes and services. On 29th July, 2003, the Faculty was excised from the College of Medicine where it is still domiciled after it had met the standards of the Pharmacists Council of Nigeria to become a full-fledged Faculty of the University of Lagos. The Faculty of Pharmacy is very much like the Faculty of Law that runs a single degree programme. None of the Departments in the Faculty gives separate degrees. The Faculty is structured to deliver training in the following areas: 
Procurement, storage and procurement of drugs;</p>
                <p className="mt-5"> Preparation, compounding, packaging and quality control of drugs and medicaments;
Monitoring drug utilization by patients;
Educating patients concerning appropriate use of their prescription and non-prescription medication;
Providing drug information to other health professionals e.g veterinarians and physicians;
Collecting and evaluating data from the patient, other health care professionals, the literature and past experience as an aid to drug therapy judgment;
Reviewing scientific publications in order to maintain and add to acquired professional knowledge.
The degree course is an integrated study of the pharmaceutical sciences.  Traditionally, at least four core subject areas have been studied, but the boundaries between them are not distinct as emphasis is placed on their relationships.  Basic to all pharmacy professional curricula are the following broad categories: Pharmacognosy, Pharmaceutics and Pharmaceutical Technology, Pharmaceutical Microbiology, Pharmacology, Clinical Pharmacy and Biopharmacy as well as Pharmacy Practice and Management. Finally, all pharmacy students receive instructions on the existing national laws affecting the practice of pharmacy and on the Ethics of Pharmacy profession.</p>
                <p className="mt-5">
                <TextHeading content='Department of Pharmaceutical Chemistry.' />
At inception, the Department of Pharmaceutical Chemistry was established as a twin Department of Pharmaceutical Chemistry and Pharmacognosy. The first Head of Department was the late Professor Daniel Dwuma Badu (of the School of Pharmacy, University of Science and Technology, Kumasi, Ghana from 1981-1982. It became a full-fledge Department in 1983, under the same Professor Badu.  Other pioneer staff included Dr. H.A.B. Coker, Dr. E.O.Fadiran, Prof. E.E.Essien, Dr. Q.Salako, Dr. E. Edoho, Mr. Seth Ablorddeppy and Miss Ijeoma Anyanwu. The technical staff included Mr.B.O.S. Dosa and Mrs. Y.A. Bashorun. The staff strength has improved over the years. The Department is involved in teaching pharmaceutical courses to students at undergraduate and postgraduate levels.
</p>
                <p className="mt-5">
                <TextHeading content='Department of Pharmaceutics and Pharmaceutical Technology' />
Courses in this Department are concerned with the production, dispensing and quality control of drugs. The pioneer coordinator of the Department was Mrs (now Professor) Omotunde Odusote. In the early years of the Department, it was imperative to appoint a number of experienced pharmacists as Associate Lecturers to complement the full staff. These included late Chief Andrew Eghoh, FPSN, who taught Pharmacy Laws; Pastor Austin Ukaiwe and Professor E.O.Osazuwa coordinated Pharmaceutical Microbiology courses; Mr. Oludotun G. Amosun and Mr. Abiodun Alli taught Good Manufacturing Practice and Pharmacy Management respectively. The location of major pharmaceutical Manufacturing companies in Lagos has been a major advantage to the Department in terms of placement of students for industrial training. Many of the lecturers of the Department have served as consultants to international organisations and big companies. Among them are Professor C.I.Igwilo, a National Merit Award winner who served as consultant on UNDP project on Medicinal and Aromatic plants.</p>
                <p className="mt-5">
                <TextHeading content='Department of Pharmacognosy ' />
The Department was established in 1983, having coexisted with Pharmaceutical Chemistry since 1980 when the Pharmacy programme started. Pharmacognosy is a highly specialized science and embraces the knowledge of the history, distribution, cultivation, collection, selection, separation, commerce, identification, evaluation, preservation and use of drugs, as well as the economic factors affecting the health of man and animals. The Department runs courses at the undergraduate and postgraduate levels.  Many of the staff have also won national and international awards. Among them is Professor O.A. Odukoya whose rearch on Astringency as Anti-sensitivity Marker of Some Nigerian Chewing Sticks was selected as Winner of the Poster Award of the Society for Medicinal Plant in 2006. </p>
                <p className="mt-5">
                <TextHeading content='Department of Clinical Pharmacy and Biopharmacy.' />
The Department was created in 1980. It was initially domiciled in the School of Basic Medical Sciences under the headship of Professor S.O.Bamgbose who was also the Head of the Department of Pharmacology. When a separate School of Pharmacy was created in 1983, the Department of Clinical Pharmacy and Biopharmacy became one of the Departments, with Dr. Andrew O. Obaseki as the first Head of Department. He was later succeeded by Dr. W.O.A. Thomas in 1988. Since then, the Department has had several Heads of Department. The staff strength of the Department increased significantly between 1983 and 1988 when Professor E.E. Essien was Dean of the School of Pharmacy.  The tenure of Professor Fola Tayo as Dean, from 1989 to 1995, was particularly remarkable for the review and expansion of the curriculum. The Department also has a vibrant postgraduate programme. The first set of Master of Pharmacy degree students were registered in 1997, the same year the Department also commenced a Doctor of Philosophy programme in Clinical Pharmacy and Biopharmacy. Many staff of the Deoartment have similarly served as consultants to health organisations including the World Health Organisation (WHO).</p>
            </Element> 

            <div className='button-container'>
                    <button onClick={() => navigate('/sectionVII/ix')}>Previous  - Faculty Of Management Sciences</button>

                    <button onClick={() => navigate('/sectionVII/xi')}>Next  - Faculty Of Science</button>
                </div>
        </MainLayout>
    );
}




export default Pharmacy














