import React from 'react'

const SkillsTable = () => {
    const skills = [
        "Javascript",
        "HTML 5",
        "CSS",
        "PHP",
        "React",
        "Next.js",
        "RUST",
        "Networking",
  ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
            <div
                key={skill}
                className="border border-white py-2 px-4 text-center text-sm sm:text-base rounded-lg 
                     hover:bg-gray-200 hover:border-gray-300 hover:text-gray-800 
                     cursor-default select-none transition-colors duration-200"
            >
                {skill}
            </div>
            ))}
        </div>
    )
}

export default SkillsTable
