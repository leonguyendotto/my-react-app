import React from 'react';
import './projects.css';
import ProjectCard from './project-card';
import Line from '../../common/line/index';
// import projects from '../../data/projects.json'
import axios from 'axios';


export default class Projects extends React.Component{
  constructor (props){
    super(props);
      this.state = {
        projects: []
    }
  }

  componentDidMount (){
      axios.get('./projects.json')
          .then (res => {
              const projects = res.data;
              console.log(res);
              this.setState ({projects:projects})
          })
  }
  render (){
    const {projects} = this.state;
    return (
      <div className='projects'>
        <Line />
        <label className='section-title'>
          Projects
        </label>
        <div>
          {projects.map((project)=>{
            return <ProjectCard project ={project}/>;
          })}
        </div>
      </div>
    )
  }
}