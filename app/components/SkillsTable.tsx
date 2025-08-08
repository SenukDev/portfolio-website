import React from 'react'

const SkillsTable = () => {
    const skills = [
        "Javascript",
        "HTML 5",
        "CSS",
        "CakePHP",
        "RUST",
        "Networking",
        "React",
        "Next.js",
  ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
            <div
                key={skill}
                className="border border-white py-2 px-4 text-center text-sm sm:text-base rounded-lg"
            >
                {skill}
            </div>
            ))}
        </div>
    )
}

export default SkillsTable
