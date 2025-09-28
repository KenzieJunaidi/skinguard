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

    const [currActive, setCurrActive] = useState("Hero");

    useEffect(() => {
        const handleScroll = () => {
        const y = window.scrollY;

        // 🎯 Manual tripwires (adjust numbers to match your page layout)
        if (y < 500) {
            setCurrActive("hero");
        } else if (y >= 500 && y < 1200) {
            setCurrActive("about");
        } else {
            setCurrActive("detect");
        }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.div className="navbar" initial={{y: -200}} animate={{y: 0}} transition={{duration: 1, delay: 0.3, ease: "easeOut"}}>
            <div className="navbar-content">
                <motion.div className="title" whileHover={{scale: 1.05, textShadow: "0 0 6px rgba(0, 0, 0, 0.3)"}}>
                    <h2 className="title-text">{window.innerWidth >= 720 ? "SkinGuard" : "SG"}</h2>
                </motion.div>
                <motion.ul className="nav-links" variants={staggerContainer} initial="initial" animate="animate">
                    <motion.li variants={FadeIn} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                        <a href="#hero" className={`${currActive === "hero"? "active" : ""}`}>Home</a>
                    </motion.li>
                    <motion.li variants={FadeIn} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                        <a href="#about" className={`${currActive === "about"? "active" : ""}`}>About</a>
                    </motion.li>
                    <motion.li variants={FadeIn} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                        <a href="#detect" className={`${currActive === "detect"? "active" : ""}`}>Detect</a>
                    </motion.li>
                </motion.ul>
            </div>
        </motion.div>
    );
}