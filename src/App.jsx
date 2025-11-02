import { useState } from 'react';

import ToDoApp from './components/ToDoApp.jsx';
import Projects from './components/Projects.jsx';

import './App.css'


function App() {
  const [ projectsState, setProjectState ] = useState({
    selectedProjectId: undefined,
    projects: [],
    inProgress: [],
    completed: []
  });

  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }

      return{
        ...prevState,
        projects: [
          ...prevState.projects,
          newProject
        ]
      };
    });
  }

  console.log(projectsState);

  return (
    <>
      <ToDoApp onAdd={handleAddProject} />
      <Projects projects={projectsState.projects}/>
    </>
  )
}

export default App
