import React from "react";
import Project from "./Project";

const Projects = () => {
    return(
        <div className="w-full h-auto flex flex-col items-center mt-5 px-4 lg:px-10 gap-6 animate-page">
            <h1 className="text-5xl font-bold text-gray-300">My <span className="text-[#8B5CF6] underline-offset-8 underline">Projects</span></h1>

            <h2 className="text-xl text-gray-300 text-center">A few of the projects I have built using my Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 items-center justify-center justify-items-center">

                <Project image="/quiz.png" name="Friends Quiz" 
                description="An interactive quiz based on the TV series Friends, built using HTML, CSS and JavaScript, featuring dynamic questions, interactive elements and score tracking."
                tech={["HTML", "CSS", "JavaScript"]}
                link1="https://friends-quiz-wheat.vercel.app"
                link2="https://github.com/ansarimohdashraf02-cmd/Friends_Quiz"/>

                <Project image="/todo.png" name="Task Manager" 
                description="A task management application built using HTML, CSS and JavaScript, allowing users to add, edit, complete and delete tasks, with localStorage for data persistence and overdue tasks highlighted in red."
                tech={["HTML", "CSS", "JavaScript", "LocalStorage"]}
                link1="https://todolist-ten-taupe-99.vercel.app" 
                link2="https://github.com/ansarimohdashraf02-cmd/To_Do_List"/>

                <Project image="/weatherly.png" name="Weather Forecast" 
                description="A weather app built using JavaScript and a weather API, providing real-time weather updates for cities worldwide through city-based search."
                tech={["HTML", "CSS", "JavaScript", "API"]}
                link1="https://weatherly-flax-gamma.vercel.app"
                link2="https://github.com/ansarimohdashraf02-cmd/Weatherly"/>

                <Project image="/login.png" name="Authentication UI" 
                description="A responsive authentication system built with React and Tailwind CSS, featuring regex-based validation, localStorage for user data storage, duplicate account detection and login credential verification."
                tech={["React", "Tailwind CSS", "LocalStorage"]}
                link1="https://react-login-signup-omega.vercel.app"
                link2="https://github.com/ansarimohdashraf02-cmd/react-login-signup"/>

            </div>

        </div>
    )
}  

export default Projects;