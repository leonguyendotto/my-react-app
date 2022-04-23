import React from 'react';
import './skills.css';
import Line from "../../common/line/index";
// import { SkillsData } from '../../data/skills';
import SkillCard from './skill-card';
import axios from 'axios';

export default class Skills extends React.Component {
  constructor(props){
    super(props);
      this.state ={
        skills:[]
      }
  }

  componentDidMount () {
    axios.get('./skills.json')
      .then (res => {
        const skills = res.data;
        console.log(res);
        this.setState({skills:skills})
      })
  }
  render() {
    const {skills} = this.state;
    return (
      <div className='skills'>
        <Line />
        <label className='section-title'> Skills </label>
        <div className='skills-container'>
              <div className='skills-section'>
                <label className='skills-section-title'></label>
                <div className='skills-list'>
                  {skills.map((skill)=>{
                    return <SkillCard skill={skill} />;
                  })}
                </div>
              </div>
        </div>
      </div>
    )
  }
}

