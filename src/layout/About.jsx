import React from 'react'
import ButtonAbout from '../widgets/ButtonAbout'
import { motion } from 'framer-motion'

function About() {
    const image = {
        visible: { opacity: 1, x: 100 },
        hidden: { opacity: 0, duration: 5 },
    }
    const texts = {
        visible: { opacity: 1, x: -0 },
        hidden: { opacity: 0, duration: 5, x:-100 },
    }
    return (
        <div className='flex gap-32 mb-20  w-full'>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={image}
                viewport={{ once: false }}
                transition={{ delay: 0.5, duration: 1 }}
                className=''>
                <img src="../icons/about.png" className=' -ml-10 w-96 hover:scale-95 transition-all duration-500' alt="" />
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={texts}
                viewport={{ once: false }}
                transition={{ delay: 0.5, duration: 1 }}
                className='-mr-[300px]'
            >
                <h3 className='text-orange-600 text-7xl uppercase font-mono pb-6'>
                    About Me
                </h3 >
                <p className='text-white w-[60ch] text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis pariatur modi nesciunt architecto illum quos eos maiores ad. Labore similique nobis nihil rerum! Hic pariatur commodi magnam veniam. Recusandae, in?</p>
                <p className='text-white w-[60ch] text-lg pb-10' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempore autem voluptas, dolorem quas nam voluptates? Sequi voluptate blanditiis debitis animi maiores exercitationem voluptatibus fugit sed? Nemo blanditiis qui quibusdam?</p>
                <div className='flex gap-4'>
                    <ButtonAbout color="bg-orange-600" text="Hire me" />
                    <ButtonAbout color="bg-white" text={"CV"} />
                    <ButtonAbout color="bg-amber-900" text="Buy Me a Coffee" />

                </div>
            </motion.div>
        </div>
    )
}

export default About