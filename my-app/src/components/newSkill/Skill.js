import React, { useState } from 'react'
import './skill.css'

const Skill = ({ done, head }) => {
    const [style, setstyle] = useState({})

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }
        setstyle(newStyle);
    }, 200);
    return (
       
        <div className="progess-body ">
            
            <div className="content skills_wrap" data-aos="zoom-in-up"
       data-aos-offset="200"
       data-aos-once="true" 
       data-aos-duration="1000">
                <h3>{head}</h3>
            </div>
            <div className="progress"data-aos="zoom-in-up"
       data-aos-offset="200"
       data-aos-once="true" 
       data-aos-duration="1000">
                <div className="progress-done" style={style} data-aos="fade-right"
       data-aos-offset="200"
       data-aos-once="true" 
       data-aos-duration="1000" >
                    {done}%
                </div>
            </div>

        </div>
    )
}

export default Skill
