import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FadeIn = {
    initial: {opacity: 0},
    animate: {opacity: 1},
    transition: {duration: 0.6},
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.5
        },
    },
};

export const Navbar = () => {

    const [isScroll, setIsScroll] = useState(false);

    useState(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);
    
    return (
        <motion.div className="navbar" initial={{y: -200}} animate={{y: 0}} transition={{duration: 1, delay: 0.3, ease: "easeOut"}}>
            <motion.div className={`navbar-background ${isScroll ? "show-bg" : "unshow-bg"}`}/>
            <motion.div className="title" whileHover={{scale: 1.05, textShadow: "0 0 6px rgba(0, 0, 0, 0.3)"}}>
                <span>Skin</span>
                <span className="title-recolor">Guard</span>
            </motion.div>
            <motion.ul className="nav-links" variants={staggerContainer} initial="initial" animate="animate">
                <motion.li variants={FadeIn} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                    <a href="#hero">Home</a>
                </motion.li>
                <motion.li variants={FadeIn} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                    <a href="#steps">Steps</a>
                </motion.li>
                <motion.li variants={FadeIn} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                    <a href="#detect">Detect</a>
                </motion.li>
            </motion.ul>
        </motion.div>
    );
}