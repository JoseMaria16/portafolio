import React from 'react'
import { Frontend_skill } from '../../data/data'
import { motion } from 'framer-motion'

function Frontend() {
    const list = {
        visible: { opacity: 1, y: -110 },
        hidden: { opacity: 0, duration: 5 },
    }
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={list}
            viewport={{ once: false }}
            transition={{ delay: 0.5, duration: 1 }}
            className='flex flex-col gap-10 flex-wrap mt-32 xl:w-[90%]'>
            <div className='flex justify-start items-center gap-20'>
                <div className='w-2 h-7 bg-orange-500'></div>
                <h3 className='text-3xl text-left pr-24'>Frontend</h3>
            </div>
            <div className='flex gap-5 flex-wrap mb-14'>
                {Frontend_skill.map((skill) => (
                    <div className='group hover:scale-105 transition-all bg-gray-900 items-center flex w-32 h-32 rounded-md' key={skill.skill_name}>
                        <img className="w-16 mx-auto group-hover:scale-125 transition-all duration-300" src={skill.Image} alt="" />
                    </div>
                ))}
            </div>
        </motion.div>

    )
}

export default Frontend