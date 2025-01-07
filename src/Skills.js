import React from "react";
import './Skills.css';
import clogo from './assets/clogo.png';
import cpplogo from './assets/cpplogo.png';
import pythonlogo from './assets/pythonlogo.png';
import javalogo from './assets/javalogo.png';
import reactlogo from './assets/reactlogo.png';
import angularlogo from './assets/angularlogo.png';
import htmllogo from './assets/htmllogo.png';

const Skills = () => {
    const skills = [
        { name: "C", logo: clogo },
        { name: "C++", logo: cpplogo },
        { name: "Python", logo: pythonlogo },
        { name: "Java", logo: javalogo },
        { name: "React.js", logo: reactlogo },
        { name: "Angular.js", logo: angularlogo },
        {name:"HTML & CSS",logo:htmllogo},
    ];

    return (
        <div className="skills-container">
            <h1 className="skills-title">My Skills</h1>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <img src={skill.logo} alt={`${skill.name} Logo`} className="skill-logo" />
                        <h2>{skill.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;