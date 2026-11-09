
import React from 'react'

const Home = () => {
  return (
    <div className="w-full min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-6 px-5 sm:px-8 md:px-12 lg:px-10 xl:px-20 py-6 animate-page">

      <div className="w-full lg:w-1/2 flex flex-col items-start">

        <h2 className="w-fit text-lg sm:text-xl lg:text-2xl text-gray-300 font-bold bg-[#1E293B] border-2 border-[#334155] rounded-lg py-2 px-3 sm:px-4 flex gap-2 items-center mb-4">
          <div className="h-3 w-3 shrink-0 bg-[#8B5CF6] rounded-full shadow-[0_0_10px_2px_#8B5CF6]"></div>
          Hello, I'm Ashraf
        </h2>

        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl py-2 font-mono text-[#8B5CF6] text-shadow-[0_0_8px_rgba(139,92,246,0.45)]">
          Frontend Developer
        </h1>

        <p className="text-sm sm:text-base lg:text-lg text-gray-400 py-4 max-w-xl leading-relaxed">
          A passionate frontend developer with a keen eye for detail and a love for creating engaging user experiences.
        </p>

      </div>

      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src="/avatar.png"
          alt="Developer avatar"
          className="w-64 sm:w-80 md:w-96 lg:w-full lg:max-w-[35rem] h-auto object-contain"
        />
      </div>

    </div>
  )
}

export default Home
