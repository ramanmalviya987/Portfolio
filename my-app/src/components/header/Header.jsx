import React from 'react'
import Button from '@material-ui/core/Button';
import './header.css'
import { motion } from 'framer-motion'
import Dark from "../../images/man.png"
import Social from '../social/Social';


const Header = () => {

    return (
        <div className="header  section__padding  " id="home">
            <div className="header-content">
                <motion.h1
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="gradient__text">Mohd Rehan Qureshi
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >Nice to meet you,
                    Since beginning my journey as a freelance designer nearly 2 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</motion.p>
                <motion.div 
                initial={{opacity:0, x: -100}}
                animate={{opacity:1, x: 0}}
                transition={{duration:1}}
               
                className="header-content_btn">
                <Button 
                variant="contained">Resume</Button>
                </motion.div>
                <motion.div
                initial={{opacity:0 , x:100}}
                animate={{opacity:1, x:0}}
                transition={{duration:1}}
                >
                    <Social />
                </motion.div>
                
            </div>


            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="header-image">
                <img src={Dark} />
            </motion.div>

        </div>


    );

}

export default Header
