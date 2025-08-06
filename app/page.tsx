import Education from "./components/Education";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

export default function Home() {
    return (
        <main className=" text-white mx-auto max-w-3xl pt-24">
            <Introduction/>
            <Skills/>
            <Education/>
            <Projects/>
            <Experience/>
        </main>
    );
}
