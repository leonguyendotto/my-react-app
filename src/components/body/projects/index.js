import React from 'react';
import { ProjectData } from '../../data/projects';
import './projects.css';
import ProjectCard from './project-card';
import Line from '../../common/line/index';

function Projects() {
  const data = ProjectData
  return (
    <div className='projects'>
      <Line />
      <label className='section-title'>
        Projects
      </label>
      <div>
        {data.map((project)=>{
          return <ProjectCard project ={project}/>;
        })}
      </div>
    </div>
  )
}

export default Projects