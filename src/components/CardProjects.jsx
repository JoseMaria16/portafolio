import React from 'react'

function CardProjects({ title, info, ...props }) {

    return (
        <div className="bg-black/80 w-full h-full mt-[100%] group-hover:mt-0 transition-all duration-300">
            <div className=" h-full flex flex-col px-6 py-7 justify-between">
                <div>
                    <h2 className="text-3xl pb-4">{title}</h2>
                    <p className="text-sm w-[80%]">{info}</p>
                </div>
                <div className="flex items-center gap-4">
                    <img src={`../skills/${props.tecOne}.svg`} className="w-9 h-10" alt="" />
                    <img src={`../skills/${props.tecTwo}.svg`} className="w-9 h-10" alt="" />
                    <img src={`../skills/${props.tecThree}.svg`} className="w-9 h-10" alt="" />
                </div>
            </div>
        </div>
    )
}

export default CardProjects