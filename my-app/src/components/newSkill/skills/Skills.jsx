import React from 'react'
import './skills.css'
import './skills.css'
import Skill from '../Skill'
const Skills = () => {
    return (
        <div className="skills section__padding">
            <div className="skills-heading gradient__text" data-aos="flip-right"

            >
                <h1>My SKills</h1>
            </div>
            <div className="my-skills" 
       >
                <Skill done="75" head="javascript" text="I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time." />
                <Skill done="80" head="PHP" text="I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time." />

                <Skill done="60" head="React" text="I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time." />
            </div>
            <div className="my-skills2" data-aos="slide-left"
       data-aos-offset="200"
       data-aos-duration="1000">
                <Skill done="100" head="HTML5" text="I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time." />

                <Skill done="75" head="CSS3" text="I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time." />

                <Skill done="90" head="Laravel" text="I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time." />
                </div>
        </div>

    )
}

export default Skills
