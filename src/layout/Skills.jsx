    import React from 'react'
    import { motion } from 'framer-motion'
import Frontend from './Skills/Frontend'
import BackEnd from './Skills/BackEnd'
import Other from './Skills/Other'

    function Skills() {
            const list = {
                visible: { opacity: 1, y: -30 },
                hidden: { opacity: 0, duration: 5 },
            }
            return (
                <div className='flex flex-col mt-32 px-32 xl:mt-32'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={list}
                        viewport={{ once: true }}
                        transition={{ delay: 0, duration: 1 }}

                    >
                        <h2 className='uppercase font-bold pb-5 text-7xl text-left opacity-60'>Skills</h2>
                        <Frontend />   
                        <BackEnd />     
                        <Other />               
                 </motion.div>
                </div>
            )
        }

    export default Skills