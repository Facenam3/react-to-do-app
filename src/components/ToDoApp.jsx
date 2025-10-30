import Todo from './ToDo.jsx';
import CreateProject from './CreateProject.jsx';

export default function ToDoApp() {
    return (
        <div className='bg-gray-50 rounded-md p-6'>
              <Todo />
              <CreateProject />
        </div>
    );
}