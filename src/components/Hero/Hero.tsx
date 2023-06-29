import React from 'react'
import './styles.scss'
import { motion } from "framer-motion";
import Animations from '../../utils/Animations';
import { TextSequence } from './Letter';

const Hero = () => {
    let easeing = [0.6, -0.05, 0.01, 0.99];

    const { stagger, fadeInUp, btnGroup, } =
        new Animations();


    const firstNameLetters = ["University", "Of", "Lagos"];
    const lastNameLetters = [''];
    return (
        <motion.div
            className="hero_content_wrapper"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: easeing }}
        >
            <div className="hero_content_wrapper_container">
                <motion.div
                    className="hero_content_wrapper_left"
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <div className="hero_content_wrapper_left_inner">
                        <motion.h2 className="hero_main_text">
                            <TextSequence words={firstNameLetters} className="first" />
                            <TextSequence words={lastNameLetters} className="last" />
                        </motion.h2>

                        <motion.span
                            className="hero_desc"
                            initial="initial"
                            animate="animate"
                            variants={fadeInUp()}
                        >
                            <motion.span>
                                Motto - In Deed and In truth
                            </motion.span>
                        </motion.span>


                    </div>
                </motion.div>

                <motion.div className="hero_content_wrapper_right">
                    <div className='w-[350px] h-[350px]'>
                        <motion.img
                            src={require("../../assets/img/Maze.png")}
                            alt="bg"
                            initial={{ x: 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className='w-full h-full'
                        />
                    </div>


                    <div className="mx-auto max-w-[600px] bg-purple rounded-lg p-2 mt-4">
                        <h1 className="text-center text-white text-[35px]">
                            SYMBOLS OF AUTHORITY
                        </h1>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Hero