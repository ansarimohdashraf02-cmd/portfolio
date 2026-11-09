import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faCoffee, faWind, faPalette, faLaptopCode, faWrench, faStar, faLightbulb, faUsers, faComments, faClock, faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faJs, faReact, faGithub } from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
    return (
        <div className="w-full px-6 md:px-12 py-4 animate-page">
            <div className="flex flex-col items-center text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-bold text-white">My <span className="text-[#8B5CF6]">Skills</span></h1>
                <div className="w-32 h-1 bg-[#8B5CF6] rounded-full mt-3"></div>
                <p className="text-gray-400 text-lg mt-5">Technologies, tools and skills I work with.</p>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col gap-7">

                <div className="bg-[#1E293B]/65 border border-[#8B5CF6]/60 rounded-2xl p-6 md:p-8">
                    <div className="flex items-center gap-5 mb-7">
                        <div className="p-4 rounded-xl bg-[#8B5CF6]/25 border border-[#8B5CF6]/30">
                            <FontAwesomeIcon icon={faCode} className="text-[#A78BFA] text-3xl" />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white">Technical Skills</h2>
                            <p className="text-gray-400 mt-1">Programming languages and web technologies.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div className="flex items-center justify-center gap-4 p-4 rounded-xl border border-[#8B5CF6]/70 bg-[#0F172A]/50 hover:bg-[#8B5CF6]/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:-translate-y-1 transition-all duration-300">
                            <FontAwesomeIcon icon={faCode} className="text-[#A78BFA] text-3xl" />
                            <span className="text-white font-semibold text-lg">C</span>
                        </div>

                        <div className="flex items-center justify-center gap-4 p-4 rounded-xl border border-[#8B5CF6]/70 bg-[#0F172A]/50 hover:bg-[#8B5CF6]/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:-translate-y-1 transition-all duration-300">
                            <FontAwesomeIcon icon={faCoffee} className="text-[#ED8B00] text-3xl" />
                            <span className="text-white font-semibold text-lg">Java</span>
                        </div>

                        <div className="flex items-center justify-center gap-4 p-4 rounded-xl border border-[#8B5CF6]/70 bg-[#0F172A]/50 hover:bg-[#8B5CF6]/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:-translate-y-1 transition-all duration-300">
                            <FontAwesomeIcon icon={faHtml5} className="text-[#E34F26] text-3xl" />
                            <span className="text-white font-semibold text-lg">HTML</span>
                        </div>

                        <div className="flex items-center justify-center gap-4 p-4 rounded-xl border border-[#8B5CF6]/70 bg-[#0F172A]/50 hover:bg-[#8B5CF6]/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:-translate-y-1 transition-all duration-300">
                            <FontAwesomeIcon icon={faCss3Alt} className="text-[#1572B6] text-3xl" />
                            <span className="text-white font-semibold text-lg">CSS</span>
                        </div>

                        <div className="flex items-center justify-center gap-4 p-4 rounded-xl border border-[#8B5CF6]/70 bg-[#0F172A]/50 hover:bg-[#8B5CF6]/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:-translate-y-1 transition-all duration-300">
                            <FontAwesomeIcon icon={faJs} className="text-[#F7DF1E] text-3xl" />
                            <span className="text-white font-semibold text-lg">JavaScript</span>
                        </div>

                        <div className="flex items-center justify-center gap-4 p-4 rounded-xl border border-[#8B5CF6]/70 bg-[#0F172A]/50 hover:bg-[#8B5CF6]/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:-translate-y-1 transition-all duration-300">
                            <FontAwesomeIcon icon={faReact} className="text-[#61DAFB] text-3xl" />
                            <span className="text-white font-semibold text-lg">React</span>
                        </div>

                        <div className="flex items-center justify-center gap-4 p-4 rounded-xl border border-[#8B5CF6]/70 bg-[#0F172A]/50 hover:bg-[#8B5CF6]/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:-translate-y-1 transition-all duration-300">
                            <FontAwesomeIcon icon={faWind} className="text-[#06B6D4] text-3xl" />
                            <span className="text-white font-semibold text-lg">Tailwind CSS</span>
                        </div>
                    </div>
                </div>

                <div className="bg-[#1E293B]/65 border border-[#8B5CF6]/60 rounded-2xl p-6 md:p-8">
                    <div className="flex items-center gap-5 mb-7">
                        <div className="p-4 rounded-xl bg-[#8B5CF6]/25 border border-[#8B5CF6]/30">
                            <FontAwesomeIcon icon={faWrench} className="text-[#A78BFA] text-3xl" />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white">Tools & Platforms</h2>
                            <p className="text-gray-400 mt-1">Tools I use for development, design and productivity.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="flex items-center justify-center gap-4 p-4 rounded-xl border border-[#8B5CF6]/70 bg-[#0F172A]/50 hover:bg-[#8B5CF6]/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:-translate-y-1 transition-all duration-300">
                            <FontAwesomeIcon icon={faGithub} className="text-white text-3xl" />
                            <span className="text-white font-semibold text-lg">GitHub</span>
                        </div>

                        <div className="flex items-center justify-center gap-4 p-4 rounded-xl border border-[#8B5CF6]/70 bg-[#0F172A]/50 hover:bg-[#8B5CF6]/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:-translate-y-1 transition-all duration-300">
                            <FontAwesomeIcon icon={faLaptopCode} className="text-[#007ACC] text-3xl" />
                            <span className="text-white font-semibold text-lg">VS Code</span>
                        </div>

                        <div className="flex items-center justify-center gap-4 p-4 rounded-xl border border-[#8B5CF6]/70 bg-[#0F172A]/50 hover:bg-[#8B5CF6]/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:-translate-y-1 transition-all duration-300">
                            <FontAwesomeIcon icon={faPalette} className="text-[#00C4CC] text-3xl" />
                            <span className="text-white font-semibold text-lg">Canva</span>
                        </div>
                    </div>
                </div>

                <div className="bg-[#1E293B]/65 border border-[#8B5CF6]/60 rounded-2xl p-6 md:p-8">
                    <div className="flex items-center gap-5 mb-7">
                        <div className="p-4 rounded-xl bg-[#8B5CF6]/25 border border-[#8B5CF6]/30">
                            <FontAwesomeIcon icon={faStar} className="text-[#A78BFA] text-3xl" />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white">Soft Skills</h2>
                            <p className="text-gray-400 mt-1">Key skills that help me work and grow effectively.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="flex items-center justify-center gap-4 p-4 rounded-xl border border-[#8B5CF6]/70 bg-[#0F172A]/50 hover:bg-[#8B5CF6]/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:-translate-y-1 transition-all duration-300">
                            <FontAwesomeIcon icon={faLightbulb} className="text-[#A78BFA] text-2xl" />
                            <span className="text-white font-semibold">Problem Solving</span>
                        </div>

                        <div className="flex items-center justify-center gap-4 p-4 rounded-xl border border-[#8B5CF6]/70 bg-[#0F172A]/50 hover:bg-[#8B5CF6]/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:-translate-y-1 transition-all duration-300">
                            <FontAwesomeIcon icon={faUsers} className="text-[#A78BFA] text-2xl" />
                            <span className="text-white font-semibold">Teamwork</span>
                        </div>

                        <div className="flex items-center justify-center gap-4 p-4 rounded-xl border border-[#8B5CF6]/70 bg-[#0F172A]/50 hover:bg-[#8B5CF6]/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:-translate-y-1 transition-all duration-300">
                            <FontAwesomeIcon icon={faComments} className="text-[#A78BFA] text-2xl" />
                            <span className="text-white font-semibold">Communication</span>
                        </div>

                        <div className="flex items-center justify-center gap-4 p-4 rounded-xl border border-[#8B5CF6]/70 bg-[#0F172A]/50 hover:bg-[#8B5CF6]/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:-translate-y-1 transition-all duration-300">
                            <FontAwesomeIcon icon={faClock} className="text-[#A78BFA] text-2xl" />
                            <span className="text-white font-semibold">Time Management</span>
                        </div>

                        <div className="flex items-center justify-center gap-4 p-4 rounded-xl border border-[#8B5CF6]/70 bg-[#0F172A]/50 hover:bg-[#8B5CF6]/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:-translate-y-1 transition-all duration-300">
                            <FontAwesomeIcon icon={faArrowsRotate} className="text-[#A78BFA] text-2xl" />
                            <span className="text-white font-semibold">Adaptability</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills
