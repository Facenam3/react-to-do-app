import ProjectButton from "./ProjectButton.jsx";
import ShowProjects from "./ShowProjects.jsx";

export default function Projects({projects, onProgress, inProgressProjects, onCompleted, completedProjects, onDelete}) {
    return (
        <div className="mt-8 flex gap-3">
            <div className="w-full">
                <ProjectButton >To-Do</ProjectButton>
                <ShowProjects type="todo" projects={projects} onProgress={onProgress} />
            </div>
            <div className="w-full">
                <ProjectButton >In Progress</ProjectButton>
                <ShowProjects type="inProgress" projects={inProgressProjects} onCompleted={onCompleted} />
            </div>
            <div className="w-full">
                <ProjectButton >Completed</ProjectButton>
                <ShowProjects  type="completed"  projects={completedProjects} onDelete={onDelete} />
            </div>
        </div>
    );
}