import React from 'react'
import Image from 'next/image';
import Location from "./Location";

const Introduction = () => {
    return (
        <div className="">
            <div className="p-2 md:p-8 space-y-6">
                <div className="flex items-center gap-6">
                    <div className="relative aspect-square w-32 md:w-48">
                        <Image
                            src="/profile.png"
                            alt="Profile Picture"
                            fill
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold">Senuk Jayawickrama</h1>
                        <p className="text-lg md:text-xl">Software Developer</p>
                        <Location/>
                        <p className="text-md md:text-lg"><a href="https://www.linkedin.com/in/senuk-jayawickrama/" target="_blank" rel="noopener noreferrer" className="inline-flex text-md md:text-lg items-center text-blue-500 hover:text-blue-400 gap-2">LinkedIn</a>, <a href="https://github.com/SenukDev" target="_blank" rel="noopener noreferrer" className="inline-flex text-md md:text-lg items-center text-blue-500 hover:text-blue-400 gap-2">Github</a>, <a href="https://www.youtube.com/@senuk_dev" target="_blank" rel="noopener noreferrer" className="inline-flex text-md md:text-lg items-center text-blue-500 hover:text-blue-400 gap-2">Youtube</a></p>
                    </div>
                </div>
                <p className="text-md md:text-lg leading-relaxed">
                    Software Developer with experience in MySQL databases, Next JS, CakePHP, and building responsive, full-stack
                    web applications and real-time multiplayer games. Led development of client-facing projects using Agile
                    methodologies, implemented secure backend systems, and integrated APIs like Stripe and Firebase. Committed to
                    delivering clean, scalable code and intuitive user experiences across mobile and desktop platforms.
                </p>
            </div>
        </div>
    )
}

export default Introduction

