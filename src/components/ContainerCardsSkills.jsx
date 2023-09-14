import React from 'react'
import { motion } from 'framer-motion'

function ContainerSkills({ bg ,children}) {
    return (
        <motion.div
            drag
            dragDirectionLock={false}
            dragConstraints={{
                top: 0,
                bottom: 100,
                left: -100,
                right: 100
            }}
            className={`${bg} w-96 overflow-hidden h-56 bg-contain bg-no-repeat relative group rounded-xl cursor-grabbing`}
        >
            {children}
        </motion.div>
    )
}

export default ContainerSkills