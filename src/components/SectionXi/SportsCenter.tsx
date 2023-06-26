import React from 'react'
import { useNavigate } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import TextHeading from '../TextHeading/TextHeading';

const SportsCenter = () => {
    const navigate = useNavigate()
    return (
        <MainLayout>
            <div className='history'>
                <TextHeading content='Sports Centre.' />

                <article className="history_content">

                    <p>
                        <p>
                            The Sports Centre was established bythedecision of Senate in 1975 following the acceptance of Adalemos Committee Reports on University Sports in University of Lagos.
                            The Sports Centre is an autonomous unit responsible to the Vice-Chancellor through the Chairman of Sports Council.
                            The Centre:
                            Organises and promotes intramural sporting activities among staff and students.
                            Organises and promotes extramural sporting activities among staff and students.
                            Organizes and promotes, general physical fitness among staff and students.
                            The Sports Centre has produced sportsmen and women who have taken part in many inter-universities games, national and international competitions. The University has been involved in NUGA competitions from its inception in 1965. It has also participated In West African Universities Game (WAUG) from the first games to the last one in Burkina Faso in 1989. It is also on record that two of WAUG records are held by the students of the University in long jump women, where Justina Ukasoanya set the game record of 5.41m and John Ukaegbu set a javelin record of 74.62m.
                            Since 1978, University of Lagos has never performed below the third place in the medal table of NUGA. In 1988, in the games held at University of Port Harcourt, the University of Lagos came first with 19 gold, 22 silver, 21 bronze medals. Unilag hosted the 17th edition of NUGA games, the last in the last century, from September 10-19, 1998, and came first on the medals table. Also in 1988, the University won the NFA Pepsi-Cola higher institutional football competition and was a runner up in the same competition in 1989.
                            The University of Lagos has produced, through the Sports Centre, many national and international sportsmen and women. These include Olympians like Hammed Adio, Joshua Kio, Elizabeth Modwogu who were in the 1980 and 1984 Olympic games respectively.
                            University of Lagos can also boast of international stars like Adokie Amasiamaka, Felix Owolabi, Frank Onwunachi and Dr. A. Omoregbe (football); speed stars like E. Ibini, F.Ochonogor, l. Ukasoanya and high jumper like Olusesan Onafowokan.
                            Chess Grand Master, Emmanuel Omuku who had won many laurels for the University in international chess deserves to be mentioned too: so also is sets cricketers, Oladipo Idowu who had captained the national cricket team to many international competitions.
                            The University has been very active in the National University Senior Staff Games (NUSSA) and has particularly contributed a lot to sustain the games up till now. In support of the Universitys Inter-Hall programmes, the University has received sponsorship from Seven-Up Sports Life Organisation. Tilga Sportif and Chemiron Pharmaceutical Company to complement internally available funds.
                            It is significant to note that, today, Unilag has ultra-modern sporting facilities that are of world standard. These facilities include:
                            A FIFA-rated standard football pitch;
                            an ultra-modern pavilion and fully furnished offices for supporting staff
                            an indoor Sports Hall fully refurbished with the flood lighting system

                            (even better than that of the National Stadium in Lagos). Its components are: Badminton Courts, one handball court, one basketball court, one tennis court (first of its kind in Nigeria), one volleyball court and gymnastics (for weight training and which will soon be upgraded to world standard).
                            the outdoor facilities which consist of: a cricket pitch (with flood lighting)2 volleyball courts (with flood lighting), 2 new handball courts (with flood lighting), 6 tennis courts (among which are flood light), 2 newly refurbished squash courts, 3 basketball courts (with flood lighting), a football practice pitch (for practice) and one standard hockey pitch in addition, public toilet have been constructed within the complex.
                            In 2021, under the leadership of Prof. Oluwatoyin Ogundipe FAS, the University carried out extensive renovation and rehabilitation of all Sporting facilities in preparation for the hosting of the 26th Nigerian University Game,(UNILAG NUGA 2022). At the end of the renovation, the Universitys sporting facilities were upgrade to include the following:
                            10 lane Olympic size swimming pool, with electronic Swiss timer
                            A practice Swimming pool
                            A roofed pavilion with a sitting capacity of 700 at the pool side
                            3 Standard basketball Courts
                            2 Standard Volleyball Courts
                            2 Standard Handball Courts
                            1 Hockey Pitch
                            8 Lane Tracks
                            1 Newly renovated Indoor Hall(capable of hosting basketball, handball,
                            volleyball, badminton
                            3 Standard Tennis Courts
                            1 Natural grass football pitch
                            Finally on 16th March, 2022 the University hosted the 26th NUGA games, showcasing her newly renovated facilities. The game held from 16th to 27th, march 2022 was successfully hosted by the Sports Centre of the University.

                            
                        </p>
                    </p>
                </article>
                <div className='button-container'>

                    <button onClick={() => navigate('/sectionI/ii')}>Next  - Development and Structure of the University</button>
                </div>

            </div>
        </MainLayout>
    );

}

export default SportsCenter