export default function ProjectButton({ children }) {
    let styles = "w-full  rounded-xl p-3 "
    if(children === "To-Do") {
        styles += " bg-blue-700"
    } else if (children === "In Progress") {
        styles += " bg-yellow-400"
    } else if (children === "Completed") {
        styles += " bg-green-600"
    }

    return (
        <div className={styles}>
                <h2 className="text-gray-50">{children}</h2>
        </div>
    );
}