import ProjectButton from "./ProjectButton.jsx";
import ShowProjects from "./ShowProjects.jsx";

export default function Projects({projects}) {
    return (
        <div className="mt-8 flex gap-3">
            <div className="w-full">
                <ProjectButton >To-Do</ProjectButton>
                <ShowProjects projects={projects} />
            </div>
            <div className="w-full">
                <ProjectButton >In Progress</ProjectButton>
            </div>
            <div className="w-full">
                <ProjectButton >Completed</ProjectButton>
            </div>
        </div>
    );
}