import React from 'react'
import { faGitAlt } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Project=(props) => {
    return(
        <div className="w-full h-auto bg-[#1E293B]/65 border-2 border-[#8B5CF6]/60 rounded-2xl p-4 hover:border-[#8B5CF6] hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:-translate-y-2 transition-all duration-300 grid grid-rows-subgrid row-span-5 gap-4">

            <div className="w-full h-full border-10 border-black rounded-lg hover:scale-150 transition-all duration-600">
                <img src={props.image} alt={props.name} className="w-full h-full object-cover rounded-lg"/>
            </div>

            <h2 className="text-xl font-bold text-gray-300">{props.name}</h2>

            <p className="text-gray-400">{props.description}</p>

            <div className="flex flex-wrap gap-2">
                {props.tech.map((item, index) => (
                    <span key={index} className="h-8 px-3 py-1 rounded-full bg-[#312E81]/70 border border-[#8B5CF6]/30 text-[#F8FAFC] text-sm font-medium">
                        {item}
                    </span>
                ))}
            </div>

            <div className="flex justify-between gap-4 items-center">

                <a href={props.link1} target="_blank" className="flex-1 h-12 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white font-semibold hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:scale-105 transition-all duration-300 flex items-center justify-center">View Project</a>

                <a href={props.link2} target="_blank" className="flex-1 h-12 rounded-xl border border-[#A78BFA] bg-[#0F172A]/50 text-white font-semibold hover:bg-[#8B5CF6]/20 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300 flex items-center justify-center gap-1">
                    <FontAwesomeIcon icon={faGitAlt} className="text-[#F05032] text-2xl" />Code</a>

            </div>

        </div>
    )
}

export default Project;