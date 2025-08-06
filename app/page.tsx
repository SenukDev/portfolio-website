import Education from "./components/Education";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";

export default function Home() {
    return (
        <main>
            <Introduction/>
            <Skills/>
            <Education/>
            <Projects/>
            <WorkExperience/>
        </main>
    );
}
