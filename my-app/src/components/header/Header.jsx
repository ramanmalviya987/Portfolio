import React from 'react'
import Button from '@material-ui/core/Button';
import './header.css'
import { motion } from 'framer-motion'
import Dark from "../../images/man.png"
import Social from '../social/Social';
import Animation, { headerAnimation, imageAnimation } from '../../Animation'
import { useScroll } from '../useScroll';


const Header = () => {
const [element , controls] = useScroll();
    return (
        <motion.div 
        initial={{y:100 , opacity: 0}}
        animate={{y:1, opacity:1}}
        transition={{delay: 0.5 , type: "tween"}}
        className="header  section__padding" id="home" ref={element}  >
            <motion.div
            variants={headerAnimation}
            animate={controls}
            transition={{delay: 0.2, type: "tween"}}
              className="header-content">
                <h1
                    
                    className="gradient__text">Mohd Rehan Qureshi
                </h1>
                <p
                    
                >Nice to meet you,
                    Since beginning my journey as a freelance designer nearly 2 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
                <div 
               
               
                className="header-content_btn">
                <Button 
                variant="contained">Resume</Button>
                </div>
                <div
                
                >
                    <Social />
                </div>
                
            </motion.div>


            <motion.div className="header-image"  
             variants={imageAnimation}
             animate={controls}
             transition={{delay: 0.2, type: "tween"}}
         >
                <img src={Dark} />
            </motion.div>

        </motion.div>


    );

}

export default Header
