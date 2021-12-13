import React from 'react'
import './servicesContain.css'
const ServicesContain = ({ title, text }) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">

        
          
           <h1 className="gradient-text2">{title}</h1>
           
          
        </div>
        <div className="gpt3__features-container_feature-text">
          <p>{text}</p>
        </div>
      </div>
      )
}

      export default ServicesContain
