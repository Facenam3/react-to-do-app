import Button from "./Button.jsx";
import Input from "./Input.jsx";

export default function CreateProject() {
    return (
        <div className="flex justify-center items-center mt-6 gap-3">
            <Input type="text" placeholder="Create Project"/>
            <Button type="submit">Create</Button>
        </div>
    );
}