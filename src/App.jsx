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

  function handleOnProgress(id) {
    setProjectState((prevState) => {
      const projectToMove = prevState.projects.find((project) => project.id === id);
      if(!projectToMove) return prevState;

      const updatedProjects = prevState.projects.filter((project) => project.id !== id);
      const updatedinProgress =  [ ...prevState.inProgress, projectToMove ];

      return {
        ...prevState,
        projects: updatedProjects,
        inProgress: updatedinProgress,
      };
    });
  }

  function handleComplete(id) {
    setProjectState((prevState) => {
        const projectToMove = prevState.inProgress.find((project) => project.id === id);
        if(!projectToMove) return prevState;

        const updatedProjects = [...prevState.projects];
        const updatedinProgress = prevState.inProgress.filter((project) => project.id !== id);
        const updatedCompleted = [ ...prevState.completed, projectToMove ];

        return {
          ...prevState,
          projects: updatedProjects,
          inProgress: updatedinProgress,
          completed: updatedCompleted
        }
    });
  }

  function handleDelete(id) {
    setProjectState((prevState) => {
      const deletedProject = prevState.inProgress.filter((project) => project.id !== id);
      if(!deletedProject) return prevState;

      const updatedProjects = [ ...prevState.projects ];
      const updatedinProgress = [ ...prevState.inProgress ];
      const updatedCompleted = deletedProject;

      return {
        projects: updatedProjects,
        inProgress: updatedinProgress,
        completed: updatedCompleted
      }
    })
  }
 
  console.log(projectsState);

  return (
    <>
      <ToDoApp onAdd={handleAddProject} />
      <Projects 
        projects={projectsState.projects}
        inProgressProjects={projectsState.inProgress}
        completedProjects={projectsState.completed}
        onCompleted={handleComplete}
        onProgress={handleOnProgress}
        onDelete={handleDelete}
        />
    </>
  )
}

export default App
