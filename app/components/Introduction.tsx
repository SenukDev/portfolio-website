import React from 'react'
import Image from 'next/image';
import Location from "./Location";

const Introduction = () => {
    return (
        <div className="">
            <div className="p-8 space-y-6">
                <div className="flex items-center gap-6">
                    <Image
                        src="/profile.png"
                        alt="Profile Picture"
                        width={128}
                        height={128}
                        className="rounded-lg"
                    />
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold">Senuk Jayawickrama</h1>
                        <p className="text-xl">Software Developer</p>
                        <Location/>
                    </div>
                </div>
                <p className="text-lg leading-relaxed">
                    I'm a software developer graduate. sdkjf a sdf jkasdlfkj a sdlfjknansd kjlfnjlakd sflkajsdf kjnasdlkjf laksdjf kljasndf  
                    asdf kjnasdj fn asdk jfnkjl afsd klajsdfn akjsdfnl kasdklj fnlkajsd fjgs dfgnsdklfjngj sdfg
                </p>
            </div>
        </div>
    )
}

export default Introduction

