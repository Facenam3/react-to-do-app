import { useRef } from "react";

import Button from "./Button.jsx";
import Input from "./Input.jsx";

export default function CreateProject({ onAdd }) {
    const project = useRef();

    function handleSave() {
        const enteredProject = project.current.value;

        onAdd({ project: enteredProject });

        project.current.value = "";
    }

    return (
        <div className="flex justify-center items-center mt-6 gap-3">
            <Input ref={project} type="text" placeholder="Plan your day"/>
            <Button 
                type="submit"
                onClick={handleSave}
            >Create</Button>
        </div>
    );
}