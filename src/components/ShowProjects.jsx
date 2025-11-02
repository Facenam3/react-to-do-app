export default function ShowProjects({ projects, type, onProgress, onCompleted, onDelete, ...props }) {
    if(projects.length === 0) return null;

    function handleClick(id) {
        if(type === "todo") {
            onProgress(id);
        } else if (type === "inProgress") {
            onCompleted(id);
        } else {
            onDelete(id);
        }
    }
        return (
            <ul className="mt-8 shadow-md rounded-md bg-stone-100 p-3">
                {projects.map((project) => (
                    <li key={project.id}>
                        <button 
                            {...props} 
                            className="py-1 px-2 bg-stone-200 hover:bg-stone-400 text-gray-600 hover:text-gray-50 mb-1 rounded-sm cursor-pointer"
                            onClick={() => handleClick(project.id)}
                        >
                        {project.project}
                        </button>
                    </li>
                ))}
            </ul>
        );
      
}