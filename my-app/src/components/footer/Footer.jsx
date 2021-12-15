import React from 'react'
import dark from '../../images/dark.jpg'
import Social from './../social/Social'
import './footer.css'
const Footer = () => {
    return (
        <div className="gpt3__footer section__padding" >
        <div className="gpt3__footer-heading" data-aos="zoom-out-down"
       data-aos-offset="200"
       data-aos-once="true" 
       data-aos-duration="1000">
          <h1 className="gradient__text">This is My Awesome Portfolio<br/>Mohd Rehan Qureshi </h1>
        </div>
    
       
    
        <div className="gpt3__footer-links" data-aos="flip-up"
       data-aos-offset="200"
       data-aos-once="true" 
       data-aos-duration="1000">
        
          <div className="gpt3__footer-links_div">
            <h4>Follow me on:</h4>
            <Social />
          </div>
          
          <div className="gpt3__footer-links_div">
            <h4>Get in touch</h4>
            <p>Pithampur Sector-1  <br />District Dhar, Madhya Pradesh<br />India, 454775 </p>
            <p><a href="tel:+919926488445">+91 9926488445</a></p>
            <p><a href="mailto:mohdrehanrq0@gmail.com">mohdrehanrq0@gmail.com</a></p>
          </div>
        </div>
    
        <div className="gpt3__footer-copyright">
          <p>@2021 Mohd Rehan Qureshi. All rights reserved.</p>
        </div>
      </div>
    )
}

export default Footer
