import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import {motion} from 'framer-motion'
import './navbar.css'
import Animation, { navbarAnimation } from '../../Animation'
const Navbar = () => {
    const LinksVarient = {
        hover:{
            scale:1.2, color: "pink"
        },
        tab:{
            scale:0.85
        }
    }

    const Menu = () =>(
        <>
        <motion.p
        variants={LinksVarient}
        whileHover="hover"
        whileTap="tab"
        
        
        ><a href="#">About</a></motion.p>
        <motion.p
         variants={LinksVarient}
         whileHover="hover"
         whileTap="tab"
        ><a href="#project">Project</a></motion.p>
        <motion.p
         variants={LinksVarient}
         whileHover="hover"
         whileTap="tab"
        ><a href="#services">Services</a></motion.p>
        <motion.p
         variants={LinksVarient}
         whileHover="hover"
         whileTap="tab"
        ><a href="#">Skill</a></motion.p>
        <motion.p
         variants={LinksVarient}
         whileHover="hover"
         whileTap="tab"
        ><a href="#">Contact</a></motion.p>
        </>
    )
    const [toggleMenu, SetToggleMenu] = useState(false)
    return (
        <motion.div
        initial={{y:-100, opacity:0}}
        animate={{y:1, opacity:1}}
        transition={{delay:0.5}}
        className=" Navbar">
            <div className="Navbar__Links">
                <div className="Navbar__Links-logo gradient__text">
                    <h1>Portfolio</h1>
                </div>
            </div>
            <div className="Navbar__Links-container">
               <Menu />
            </div>
            <div className="Navbar__menu">
                {toggleMenu ? <RiCloseLine color="white" size="27px" onClick={() => SetToggleMenu(false)} />
                    : <RiMenu3Line color="white" size="27px" onClick={() => SetToggleMenu(true)} />}

                {toggleMenu && (
                    <div className="Navbar__menu-container scale-up-center ">
                        <div className="Navbar__menu-container-links">
                           <Menu />
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    )
}

export default Navbar
