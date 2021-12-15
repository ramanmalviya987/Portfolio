import React from 'react'
import './services.css'
import ServicesContain from './servicesContain/ServicesContain';
const featuresData = [
  {
    title: 'Frontend Development',
    text: 'Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website.',
  },
  {
    title: 'Backend Development',
    text: 'Backend Development is also known as server-side development. It is everything that the users dont see and contains behind-the-scenes activities that occur when performing any action on a website. It focuses primarily on databases, backend logic, APIs, and Servers. ... Thus, it is known as the backend.',
  },
  {
    title: 'WordPress Development',
    text: 'WordPress is a fantastic modern tool that allows creators of all content to create attractive site pages without any need for software development training. WordPress is an open-source platform and easy to pick up, which makes it perfect for millions of users. That also makes it a prime source of developer jobs.',
  },

];
const Services = () => {
  return (
    <div className="services section__padding">
      <div className="services-heading gradient__text" data-aos="zoom-out"
      data-aos-duration="1000"
      data-aos-once="true" 
      >

        <h1>Services</h1>
      </div>
      <div className="gpt3__features" id="features">
    <div className="gpt3__features-heading" 
    data-aos="fade-right"
    data-aos-offset="200"
       data-aos-duration="1000"
       data-aos-mirror="true"
       data-aos-once="true" 
    
    >

      <h1 className="gradient__text">Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains.</h1>
    </div>
    <div className="gpt3__features-container"
     data-aos="fade-left"
     data-aos-offset="200"
     data-aos-once="true" 
        data-aos-duration="1000"
        data-aos-mirror="true"
    >
      {featuresData.map((item, index) => (
        <ServicesContain title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
    </div>
  )
}

export default Services
