import React from 'react'
import { GraduationCap,CodeXml,Goal } from 'lucide-react'

const About = ()=> {
    return (
        <div className="w-full min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row justify-center lg:justify-between items-center px-6 py-6 lg:py-0 gap-16 lg:gap-0 animate-page">

            <img src="/Workspace.png" alt="Workspace" className="h-[20rem] md:h-[30rem] bg-[#0F172A]" />

            <div className='flex flex-col w-full lg:w-1/2 gap-4'>

                <h1 className='text-4xl font-bold text-white'>A Little <span className="text-[#8B5CF6] underline-offset-8 underline">About Me</span></h1>

                <p className="text-gray-300 text-lg leading-relaxed mt-5 max-w-[90%]">
                I'm a frontend developer who enjoys turning ideas into clean, interactive and user-friendly web experiences. I love exploring how things work behind the scenes and bringing designs to life through code.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed mt-4 max-w-[90%] border-l-4 border-[#8B5CF6] pl-4">
                Currently, I'm focused on strengthening my development skills, learning new technologies and building projects that challenge me to think creatively and solve problems.
                </p>

                <div className="w-full mt-6 grid grid-cols-1 xl:grid-cols-3 gap-3">

                    <div className="w-full h-auto px-2 py-4 bg-[#1E293B]/65 border-2 border-[#8B5CF6]/45 rounded-2xl flex flex-col justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <GraduationCap className="size-6 text-[#8B5CF6] p-0.5 bg-[#8B5CF6]/25 border-2 border-[#8B5CF6]/30 rounded" />
                            <h2 className="text-gray-300 text-lg font-semibold">Education & Learning</h2>
                        </div>
                        <p className="text-gray-300 text-m text-center">Exploring Computer Science,programming and emerging technologies</p>
                    </div>

                    <div className="w-full h-auto px-2 py-4 bg-[#1E293B]/65 border-2 border-[#8B5CF6]/45 rounded-2xl flex flex-col justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <CodeXml className="size-6 text-yellow-500 p-0.5 bg-[#8B5CF6]/25 border-2 border-[#8B5CF6]/30 rounded" />
                            <h2 className="text-gray-300 text-lg font-semibold">Development</h2>
                        </div>
                        <p className="text-gray-300 text-m text-center">Building web experiences and working on personal and academic projects</p>
                    </div>

                    <div className="w-full h-auto px-2 py-4 bg-[#1E293B]/65 border-2 border-[#8B5CF6]/45 rounded-2xl flex flex-col justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <Goal className="size-6 text-red-500 p-0.5 bg-[#8B5CF6]/25 border-2 border-[#8B5CF6]/30 rounded" />
                            <h2 className="text-gray-300 text-lg font-semibold">Future Goals</h2>
                        </div>
                        <p className="text-gray-300 text-m text-center">To grow as a skilled developer and turn creative ideas into impactful solutions</p>
                    </div>

                </div>

            </div>

        </div>    
    )
}

export default About