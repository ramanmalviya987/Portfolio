import React from 'react'
import dark from '../../images/dark.jpg'
import './footer.css'
const Footer = () => {
    return (
        <div className="gpt3__footer section__padding" >
        <div className="gpt3__footer-heading" data-aos="zoom-out-down"
       data-aos-offset="200"
       
       data-aos-duration="1000">
          <h1 className="gradient__text">This is My Awesome Portfolio<br/>Mohd Rehan Qureshi </h1>
        </div>
    
       
    
        <div className="gpt3__footer-links" data-aos="flip-up"
       data-aos-offset="200"
       data-aos-duration="1000">
        
          <div className="gpt3__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Company</h4>
            <p>Terms & Conditions </p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Get in touch</h4>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
        </div>
    
        <div className="gpt3__footer-copyright">
          <p>@2021 GPT-3. All rights reserved.</p>
        </div>
      </div>
    )
}

export default Footer
