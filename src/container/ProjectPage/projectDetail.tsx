import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Project } from './projectList';
import "../ProjectPage/style.css"


const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null); 

  useEffect(() => {
    axios.get(`http://localhost:3001/project/${id}`)
      .then((response) => {
        setProject(response.data); 
      })
      .catch((error) => {
        console.error('Hata oluştu:', error);
      });
  }, [id]);

  if (!project) return <div>Loading...</div>; 

  return (
    <div className='detail-box'>
      <h2>{project.name}</h2>
      <div className='detail-desc'>{project.description}</div>
      <progress className='progress' value={0.6}/>
    </div>
    
  );
};

export default ProjectDetail;

