import React from 'react'
import './project.css'
import { motion } from 'framer-motion'
import ProjectContain from './projectContain/ProjectContain'
import blog from '../../images/portfolio.png'
import whatsaap from '../../images/whatsapp.png'
import ecomerce from '../../images/ecom.png'
import chat from '../../images/iforum.png'
import lara from '../../images/cms.png'
import snake from '../../images/snake.png'

const Project = () => {
 
    return (
        <div className="gpt3__blog section__padding" id="blog" >
        <div className="gpt3__blog-heading" 
       data-aos="fade-right"
       data-aos-offset="200"
       data-aos-once="true" 
       data-aos-duration="1000"
        >
          <h1 className="gradient__text">Websites promote you 24/7:<br /> No employee will do that.</h1>
        </div>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupB"
          >
            <ProjectContain 
            imgUrl={whatsaap} date="Whatsapp Clone" 
            text="This is chat clone integrate with Firebase with React JS"
             link=" https://whatsapp-clone-786.web.app/"
             tagOne="React JS"
             tagTwo="React Router"
             tagThree="Firebase"
             tagFour=""
             />
            <ProjectContain 
            imgUrl={ecomerce} date="Ecomerce"
             text="This site is made in Laravel to learn ecommerce functionality."
              link="https://sitmedu.000webhostapp.com/ecom/"
              tagOne="Laravel"
             tagTwo="MySQL"
             tagThree="Javascript" />
            <ProjectContain 
            imgUrl={chat} date="iFroum" 
            text="This is coding forum website made in PHP and MySQL."
            link="https://sitmedu.000webhostapp.com/iforum/"
            tagOne="PHP"
             tagTwo="MySQL"
             tagThree="Bootstrap"
            />
            <ProjectContain imgUrl={lara} date="Laravel CMS"
             text="It is a eCommerce CMS made in Laravel and jQuery."
             link="https://mrqdev.000webhostapp.com/"
             tagOne="Laravel"
             tagTwo="MySQL"
             tagThree="jQuery"
              />
            <ProjectContain imgUrl={snake} date="Snake Game"
             text="Snake Game is fully developed in pure JavaScript." 
             link="https://mohdrehanrq0.github.io/Snake-Game/"
             tagOne="Javascript"
             tagTwo="HTML5"
             tagThree="CSS3"
             />
            <ProjectContain imgUrl={blog} date="Portfolio"
             text="This is my previous portfolio made in React JS" 
             link="https://mohdrehanrq0.github.io/react_portfolio/"
             tagOne="React JS"
             tagTwo="email js"
             tagThree="HTML" />
          </div>
        </div>
      </div>
    )
}

export default Project
