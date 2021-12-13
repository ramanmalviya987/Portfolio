import React from 'react'
import project from '../../images/project.jpg'
import './project.css'
const Project = (props) => {
    return (
        <div className="Project col-lg-4 mt-3">
            <div className="Main-project">
                <div className="Project-list">
                    <div className="Project-card ">
                        <div className="Project-image">
                            <img src={props.img} />
                        </div>
                        <div className="Project-content">
                            <a href="                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ">
                                <h4>{props.head}</h4>
                                <h3>{props.subHead}</h3>
                                <p>{props.content}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Project
