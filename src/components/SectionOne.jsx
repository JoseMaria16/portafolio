import React from 'react'
import { motion } from 'framer-motion'


function SectionOne() {
    const list = {
        visible: { opacity: 1, y: 50 },
        hidden: { opacity: 0, duration: .5 },
    }
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={list}
            viewport={{once: false}}
            transition={{ delay: .1, duration: 2 }}
        >
            <div className="info z-10 relative mt-10 md:-mt-3">
                <h1 className='text-center text-6xl xl:text-[90px] font-bold -pb-15'>I'm José</h1>
                <p className='text-center w-[100%] mx-auto text-3xl md:w-[600px]'>Full Stack developer of applications and websites.</p>
            </div>
            <div className="picker -mt-24  w-full flex flex-col relative ">
                <img src="../hero4.png" className='mx-auto mt-52 sm:mt-20 md:mt-28 w-[500px] lg:w-[590px] relative z-10' alt="" />
                <img src="../icon.svg" className='w-[500px] top-[-30%] opacity-40 md:top-[-5%] absolute md:opacity-60 right-[-10%] z-1' alt="" />
            </div>

        </motion.div>
    )
}

export default SectionOne