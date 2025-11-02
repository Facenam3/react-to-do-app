export default function ShowProjects({ projects, ...props }) {
    return (
        <ul className="mt-8 shadow-md rounded-md bg-stone-100 p-3">
            {projects.map((project) => (
                <li key={project.idd}>
                    <button 
                        {...props} 
                        className="py-1 px-2 bg-stone-200 hover:bg-stone-400 text-gray-600 hover:text-gray-50 mb-2 rounded-sm cursor-pointer"
                    >
                    {project.project}
                    </button>
                </li>
            ))}
        </ul>
    );
}