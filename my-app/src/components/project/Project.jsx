import React from 'react'
import './project.css'
import { motion } from 'framer-motion'
import ProjectContain from './projectContain/ProjectContain'
import blog from '../../images/portfolioo.jpg'
import whatsaap from '../../images/whatsaap.jpg'
import ecomerce from '../../images/ecomerce.jpg'
import chat from '../../images/chat.jpg'
import lara from '../../images/laravel.jpg'
import snake from '../../images/snake.jpg'

const Project = () => {
 
    return (
        <div className="gpt3__blog section__padding" id="blog" >
        <div className="gpt3__blog-heading" 
       data-aos="fade-right"
       data-aos-offset="200"
       data-aos-duration="1000"
        >
          <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
        </div>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupB"
          >
            <ProjectContain 
            imgUrl={whatsaap} date="Whatsapp Clone" 
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
             link=" https://whatsapp-clone-786.web.app/" />
            <ProjectContain 
            imgUrl={ecomerce} date="Ecomerce"
             text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
              link="https://sitmedu.000webhostapp.com/ecom/" />
            <ProjectContain 
            imgUrl={chat} date="Chatting App" 
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            link="https://mohdrehanrq0.github.io/Chat-Room/"
            />
            <ProjectContain imgUrl={lara} date="Laravel CMS"
             text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
             link="https://mrqdev.000webhostapp.com/"
              />
            <ProjectContain imgUrl={snake} date="Snake Game"
             text="GPT-3 and Open  AI is the future. Let us exlore how it is?" 
             link="https://mohdrehanrq0.github.io/Snake-Game/"
             />
            <ProjectContain imgUrl={blog} date="Portfolio"
             text="GPT-3 and Open  AI is the future. Let us exlore how it is?" 
             link="https://mohdrehanrq0.github.io/react_portfolio/" />
          </div>
        </div>
      </div>
    )
}

export default Project
