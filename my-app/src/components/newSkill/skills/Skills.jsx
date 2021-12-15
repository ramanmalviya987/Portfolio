import React from "react";
import "./skills.css";
import "./skills.css";
import Skill from "../Skill";
const Skills = () => {
  return (
    <div className="skills section__padding">
      <div
        className="skills-heading gradient__text"
        data-aos="flip-right"
        data-aos-once="true"
      >
        <h1>My SKills</h1>
      </div>
      <div className="my-skills">
        <Skill
          done="75"
          head="Javascript"
        />
        <Skill
          done="80"
          head="PHP"
        />

        <Skill
          done="60"
          head="React"
        />
      </div>
      <div
        className="my-skills2"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <Skill
          done="100"
          head="HTML5"
        />

        <Skill
          done="75"
          head="CSS3"
        />

        <Skill
          done="90"
          head="Laravel"
        />
      </div>
      <div
        className="my-skills2"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <Skill
          done="80"
          head="jQuery"
        />

        <Skill
          done="70"
          head="MySQL"
        />

        <Skill
          done="70"
          head="Wordpress"
        />
      </div>
      <div
        className="my-skills2"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <Skill
          done="80"
          head="Bootstrap"
        />

        <Skill
          done="70"
          head="Tailwind"
        />

        <Skill
          done="60"
          head="Material"
        />
      </div>
    </div>
  );
};

export default Skills;
