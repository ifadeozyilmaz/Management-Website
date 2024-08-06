import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../ProjectPage/style.css"

export interface Project {
  _id: string;
  name: string;
  description: string;
}

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  useEffect(() => {
    axios.get('http://localhost:3001/project')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Bir hata oluştu:', error);
      });
  }, []);

  return (
    <div>
     <div className='project-header'>Projects</div>
      <div className='project-list'>
        {projects.map((project) => (
          <div className='project-box' key={project._id}>
            <a className='project-name' href={`/Project/${project._id}`}>{project.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList