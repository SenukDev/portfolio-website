import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <div className="p-2 md:p-8 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Projects</h1>
            <hr></hr>
            <ProjectCard
                title="CakePHP Web Application for Naarm Textile"
                visitUrl="https://rev.u24s2110.iedev.org/"
                tags={[
                    { name: "CakePHP", color: "border-blue-500" },
                    { name: "HTML5", color: "border-green-600" },
                    { name: "CSS", color: "border-yellow-400" },
                    { name: "SQL", color: "border-purple-400" },
                    { name: "JavaScript", color: "border-red-400" },
                    { name: "MVC", color: "border-blue-700" },
                    { name: "Git", color: "border-orange-400" },
                    { name: "Stripe API", color: "border-pink-300" },
                    { name: "REST API", color: "border-yellow-200" },
                ]}
                description={[
                    "Created a custom <strong>web application</strong> for a <strong>small business owner</strong>",
                    "Worked in a group of five as <strong>Lead Developer</strong> and <strong>Client Liason</strong>",
                    "All CSS was <strong>tailor-made</strong> and no <strong>template</strong> was used",
                    "Application included:",
                    { indent: true, content: "Customisable <strong>Accounts</strong> with admin approval" },
                    { indent: true, content: "<strong>Forum</strong> with Posts, Comments and Likes" },
                    { indent: true, content: "<strong>Content Management System</strong> to showcase exhibitions" },
                    
                ]}
                imageUrl="/NaarmTextileCollectiveForum.png"
            />
            <hr></hr>
            <ProjectCard
                title="Realtime Multiplayer Game using WebSockets"
                visitUrl="https://playdodgeball.dev/"
                tags={[
                    { name: "HTML5",       color: "border-green-600" },
                    { name: "JavaScript",  color: "border-red-400" },
                    { name: "Websockets",  color: "border-cyan-400" },
                    { name: "Node JS",    color: "border-blue-500" },
                    { name: "Google Cloud Hosting",color: "border-orange-400" },
                    { name: "Firebase",    color: "border-red-700" },
                    { name: "Gamemaker",    color: "border-green-300" },
                ]}
                description={[
                    " <strong>Independently</strong> delivered a <strong>complete project</strong> from <strong>planning</strong> to <strong>deployment</strong>",
                    "Fully deployed on <strong>Google Cloud</strong> with <strong>HTTPS</strong> and secure <strong>WebSocket (WSS) support</strong>",
                    "Stored website statistics using <strong>Google Firebase Realtime Database</strong>",
                    "Created a <strong>video developer log</strong> explaining the project",
                ]}
                imageUrl="/MundoDodgeball.png"
                videoUrl="https://www.youtube.com/embed/4fho21VIYnU?si=ci0oYPiOSSCb1O4s"
            />
            <hr></hr>
            <ProjectCard
                title="HTTP3 WebTransport Server using QUIC"
                tags={[
                    { name: "RUST", color: "border-orange-500" },
                    { name: "TypeScript", color: "border-cyan-700" },
                    { name: "HTTP3", color: "border-purple-400" },
                    { name: "QUIC", color: "border-pink-600" },
                    { name: "WebTransport", color: "border-yellow-700" },
                    { name: "HTML5", color: "border-green-600" },
                    { name: "CSS", color: "border-yellow-400" },
                ]}
                description={[
                    "Built a HTTP3 Web Server using <strong>cutting edge technology</strong> that communicates using the QUIC protocol",
                    "Used a <strong>data oriented approach</strong> in development using an <strong>Entity Component System</strong>.",
                ]}
                videoUrl="https://www.youtube.com/embed/aBAV-xB1hyk?si=SW1sglgIrpJUq47N"
                sourceUrl="https://github.com/SenukDev/Multiplayer-Networking"
            />
            <hr></hr>
            <ProjectCard
                title="Portfolio Website using Next JS and Tailwind CSS"
                tags={[
                    { name: "Next JS",       color: "border-gray-200" },
                    { name: "React",         color: "border-red-400" },
                    { name: "TypeScript",    color: "border-cyan-700" },
                    { name: "Tailwind CSS",  color: "border-sky-400" },
                    { name: "Google Cloud Hosting",color: "border-orange-400" },
                    { name: "HTML5", color: "border-green-600" },
                    { name: "CSS", color: "border-yellow-400" },
                ]}
                description={[
                    "Built a web application to <strong>showcase development projects</strong> using a <strong>Next JS</strong> and <strong>React</strong>.",
                    "Designed and implemented a responsive, mobile-friendly UI with custom styling and interactive components.",
                ]}
                sourceUrl="https://github.com/SenukDev/portfolio-website"
            />
        </div>
    )
}

export default Projects
