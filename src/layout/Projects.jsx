import React from 'react'
import { motion } from 'framer-motion'
import { Proyecto1, Proyecto2, Proyecto3, Proyecto4, Proyecto5, Proyecto6 } from '../widgets/Project'

function Projects() {
    const list = {
        visible: { opacity: 1, x: -204 },
        hidden: { opacity: 0, duration: 5 },
    }
    const list2 = {
        visible: { opacity: 1, y: -70 },
        hidden: { opacity: 0, duration: 5 },
    }
    return (
        <motion.div 
             id="projects"
            initial="hidden"
            whileInView="visible"
            variants={list}
            viewport={{ once: false }}
            transition={{ delay: .5, duration: 1 }}
            className=' relative w-full flex  ml-48 -mt-20  flex-col justify-center flex-wrap gap-0 h-screen'>
            <h2 className='uppercase font-serif font-bold pb-10 text-9xl text-center opacity-10'>Projects</h2>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={list2}
                    viewport={{ once: false }}
                    transition={{ delay: .5, duration: 1 }}
                    className='flex flex-wrap justify-end gap-4 items-center'>
                    <Proyecto1 />
                    <Proyecto2 />
                    <Proyecto3 />
                    <Proyecto4 />
                    <Proyecto5 />
                    <Proyecto6 />
                </motion.div>
        </motion.div>
    )
}

export default Projects