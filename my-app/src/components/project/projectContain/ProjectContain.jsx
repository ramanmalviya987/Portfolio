import React from 'react';
import './projectContain.css';
import {motion} from 'framer-motion'

const black ={
  color: "black"
}

const ProjectContain = ({ imgUrl, date, text,link ,}) => (
  <div


  className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image"
    
    data-aos="zoom-in-up"
       data-aos-offset="200"
       data-aos-duration="1000"
    
    >
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content" data-aos="zoom-in-up"
       data-aos-offset="200"
       data-aos-duration="500"
      //  data-aos-mirror="true"
       >
      <div >
        <h3>{date}</h3>
        <h5>{text}</h5>
      </div>
      <p  >
        <a href={link} >
        Click here to see the Project
        </a>
        </p>
    </div>
  </div>
);

export default ProjectContain;
