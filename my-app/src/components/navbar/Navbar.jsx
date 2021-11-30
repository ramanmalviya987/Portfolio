import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import {motion} from 'framer-motion'
import './navbar.css'
const Navbar = () => {
    const LinksVarient = {
        hover:{
            scale:1.2, color:"#AE67FA"
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
        ><a href="#">Project</a></motion.p>
        <motion.p
         variants={LinksVarient}
         whileHover="hover"
         whileTap="tab"
        ><a href="#">Services</a></motion.p>
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
        initial={{opacity: 0, y: -100 }}
        animate={{opacity: 1, y: 0}}
        transition={{duration:1}}
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
                {toggleMenu ? <RiCloseLine color="fff" size="27px" onClick={() => SetToggleMenu(false)} />
                    : <RiMenu3Line color="fff" size="27px" onClick={() => SetToggleMenu(true)} />}

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
