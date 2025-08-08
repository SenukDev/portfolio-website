import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <div className="p-2 md:p-8 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Projects</h1>
            <ProjectCard
                title="Title"
                description={[
                    "Description",
                ]}
                tags={[
                    { name: "HTML5", color: "border-green-400" },
                    { name: "JavaScript", color: "border-yellow-400" },
                    { name: "Websockets", color: "border-cyan-400" },
                    { name: "Google Cloud", color: "border-yellow-600" },
                    { name: "Firebase", color: "border-red-400" },
                ]}
                visitUrl="https://playdodgeball.dev/"
            />
        </div>
    )
}

export default Projects
