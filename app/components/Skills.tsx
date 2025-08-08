import React from 'react'
import SkillsTable from './SkillsTable'

const Skills = () => {
    return (
        <div className="p-2 md:p-8 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Skills</h1>
            <SkillsTable/>
        </div>
    )
}

export default Skills
