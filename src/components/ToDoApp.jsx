import Todo from './ToDo.jsx';
import CreateProject from './CreateProject.jsx';

export default function ToDoApp() {
    return (
        <div className='bg-stone-100 rounded-md p-6 shadow-xl'>
              <Todo />
              <CreateProject />
        </div>
    );
}