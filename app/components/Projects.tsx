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
                    "Application included:",
                    { indent: true, content: "Customisable <strong>Accounts</strong> with admin approval" },
                    { indent: true, content: "<strong>Forum</strong> with Posts, Comments and Likes" },
                    { indent: true, content: "<strong>Content Management System</strong> to showcase exhibitions" },
                    "Worked in a group of five as <strong>Lead Developer</strong> and <strong>Client Liason</strong>",
                    "All CSS was <strong>tailor-made</strong> and no <strong>template</strong> was used",
                ]}
                imageUrl="/MundoDodgeball.png"
                videoUrl="https://www.youtube.com/embed/4fho21VIYnU?si=ci0oYPiOSSCb1O4s"
            />
            <hr></hr>
            <ProjectCard
                title="HTTP3 WebTransport Server using QUIC"
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
                    "Application included:",
                    { indent: true, content: "Customisable <strong>Accounts</strong> with admin approval" },
                    { indent: true, content: "<strong>Forum</strong> with Posts, Comments and Likes" },
                    { indent: true, content: "<strong>Content Management System</strong> to showcase exhibitions" },
                    "Worked in a group of five as <strong>Lead Developer</strong> and <strong>Client Liason</strong>",
                    "All CSS was <strong>tailor-made</strong> and no <strong>template</strong> was used",
                ]}
                videoUrl="https://www.youtube.com/embed/aBAV-xB1hyk?si=SW1sglgIrpJUq47N"
                sourceUrl="https://github.com/SenukDev/Multiplayer-Networking"
            />
        </div>
    )
}

export default Projects
