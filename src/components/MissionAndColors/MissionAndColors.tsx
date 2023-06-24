import React from 'react'
import './styles.scss'
import SectionOneFacultyColorData from '../../data/sectionOneFacultyColorData'
import ScrollAnimation from "react-animate-on-scroll";
import { motion } from 'framer-motion'


const MissionAndColors = () => {
    return (

        <div className="mission_and_colors">
         
            <div className="inner_container">
                
                <motion.div initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }} className="colors">
                    <h1 className="colors_heading">Colors (By Faculties):</h1>
                    <p className="colors_sub_heading">
                        The Faculty Colours as Approved by Senate on 25th July 2018
                        (S.P.NO 2017/086) are:
                    </p>

                    <table className="colors_table">
                        <thead>
                            <tr>
                                <th>Faculty Name</th>
                                <th>Color</th>
                            </tr>
                        </thead>

                        <tbody>
                            {SectionOneFacultyColorData.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.faculty}</td>
                                        <td>{item.color}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </motion.div>
                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mission">
                    <div className='mission_item_container'>
                        <h1 className="mission_heading">Vision</h1>
                        <p className="mission_content">
                            To be a top-class institution for the pursuit of excellence in
                            knowledge, character and service to humanity.
                        </p>
                    </div>

                    <div className='mission_item_container'>
                        <h1 className="mission_heading">Mission</h1>
                        <p className="mission_content">
                            To provide a conducive environment for teaching, learning,
                            research and development, where staff and students will interact and
                            compete effectively with other counterparts globally
                        </p>
                    </div>

                    <div className='mission_item_container'>
                        <h1 className="mission_heading">Core Values</h1>
                        <p className="mission_content">
                            Commitment to Excellence in learning and character
                            Conducive and friendly learning environment Integrity and Respect
                            Continuous improvement of staff professionalism and competence
                            Commitment to continuous improvement of all facilities Enforcement
                            of innovative culture and Ethical conduct
                        </p>
                    </div>
                </motion.div>
            </div>

        </div >
    )
}

export default MissionAndColors