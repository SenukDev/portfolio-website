'use client'

// Install once: npm i framer-motion
import { motion, type Variants } from 'framer-motion'

import Education from './components/Education'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Description from './components/Description'

const container: Variants = {
    hidden: {},
    show: {
        transition: {
        staggerChildren: 0.18,
        delayChildren: 0.08,
        },
    },
}

const item: Variants = {
    hidden: { opacity: 0, filter: 'blur(2px)' },
    show: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
        type: 'spring',
        stiffness: 420,
        damping: 28,
        mass: 0.4,
        },
    },
}

export default function Home() {
    return (
        <motion.main
        className="text-white mx-auto max-w-3xl space-y-2"
        variants={container}
        initial="hidden"
        animate="show"
        >
        <motion.section variants={item}>
            <Introduction />
        </motion.section>

        <motion.section variants={item}>
            <Description />
        </motion.section>

        <motion.hr variants={item} className="border-white" />

        <motion.section variants={item}>
            <Skills />
        </motion.section>

        <motion.hr variants={item} className="border-white" />

        <motion.section variants={item}>
            <Education />
        </motion.section>

        <motion.hr variants={item} className="border-white" />

        <motion.section variants={item}>
            <Projects />
        </motion.section>
        </motion.main>
    )
}
