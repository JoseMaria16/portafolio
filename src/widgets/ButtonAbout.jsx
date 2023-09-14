import React from 'react'

function ButtonAbout({ color, text }) {
    return (
        <a href="" className={`${color} ${color == "bg-white" ? "text-black" : "text-white"}  px-8 py-3 rounded-[30px] font-medium hover:scale-105 hover:px-10 transition-all duration-700`} >
            {text}
        </a>
    )
}

export default ButtonAbout