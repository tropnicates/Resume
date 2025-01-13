import React from 'react';
import './skills.css';
import skillsData from './skills.json';

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills">Technical Skills</div>
      <div className="skills-list">
        {skillsData.technicalSkills.map((skill, index) => (
          <div className="skill-category" key={index}>
            <i className={skill.icon}></i>
            <div className="skill-details">
              <span>{skill.name}</span>
              <div className="skill-progress">
                <div
                  className="skill-progress-bar"
                  style={{ width: skill.level }}
                >
                  {skill.level}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="skills-container">
      </div>
    </div>
  );
};

export default Skills;
