import React, {useState} from 'react'
import emailjs from 'emailjs-com'
import Button from '@mui/material/Button';

import './contact.css'
const Contact = () => {
    const aftsub = "Thanks for Contact Me";
    const [sub, setsub] = useState("");
    const submit = (e) => {
        e.preventDefault();
        console.log(e.target);

        emailjs.sendForm('gmail', 'template_prgy42s', e.target, 'user_IHCiyGYkNZcFeQHj3kONa')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        setsub(aftsub);
    }
    return (
        <div className="contact section__padding">
            <div className="content" 
            data-aos="zoom-out-up"
       data-aos-offset="200"
       data-aos-mirror="true"
       data-aos-once="true"
       data-aos-duration="1000"
    >
                <h2 className="gradient__text">
                    Contact Us
                </h2>
                <p className="gradient__text">I am here to start up your start-up. I want to get to know about you—your business, your work, your needs. We’ll take it from there. I look forward to hearing from you!</p>
            </div>
            <div className="container">
                <div className="contactInfo"
                 data-aos="slide-right"
       data-aos-offset="200"
       data-aos-mirror="ture"
       data-aos-once="true"
       data-aos-duration="1000"
    >
                    <div className="box">
                        <div className="icon">
                            <i class="fas fa-map-marked-alt"></i>
                        </div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>Pithampur Sector-1  <br />District Dhar, Madhya Pradesh<br />India, 454775 </p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                        </div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p><a href="tel:+919926488445">+91 9926488445</a></p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <i class="far fa-envelope"></i>   
                             </div>
                        <div className="text">
                            <h3>Email</h3>
                            <p><a href="mailto:mohdrehanrq0@gmail.com">mohdrehanrq0@gmail.com</a></p>
                        </div>
                    </div>
                </div>
                <div className="contactForm" data-aos="slide-left"
       data-aos-offset="200"
       data-aos-once="true" 
       data-aos-mirror="ture"
       data-aos-duration="1000">
                    <form onSubmit={submit}>
                        <h2>Send Message</h2>
                        <div className="inputBox">
                            <input type="text" name="name"  required="required" />
                            <span>Full Name</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="email"  required="required" />
                            <span>Email</span>
                        </div>
                        <div className="inputBox">
                            <textarea required="required" name="msg"></textarea>
                            <span>Type Your Message....</span>
                        </div>
                        <div className="inputBox">
                            <Button type="submit" variant="contained">Send</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
