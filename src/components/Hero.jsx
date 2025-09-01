import React from "react";
import { motion } from "framer-motion";
import { ShinyText } from "./ShinyText/ShinyText.jsx";

export const Hero = () => {

    return (
        <motion.section id="hero" className="hero">
            <div className="hero-container">
                <motion.div className="hero-content">
                    <motion.div className="headline">
                        <ShinyText text="AI-Powered" speed={3} className='custom-class'/>
                        <h1 className="headline-2">Skin Lesion Check</h1>
                    </motion.div>
                    <h2 className="subtitle">Upload a photo of a mole or lesion and get instant AI-driven insights to support early skin health awareness.</h2>
                    <p className="note">
                        <i class="fas fa-exclamation-triangle" style={{color: "#f1c40f"}}></i> This tool does not provide a medical diagnosis. Please consult a dermatologist.
                    </p>
                    <motion.a className="cta-btn" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} transition={{duration: 0.2, ease: "easeIn"}}>Check My Skin</motion.a>
                </motion.div>

                <motion.div className="hero-image">
                    <img src="/attempt.jpg" alt="Face Image" />

                    <motion.div className="info-box">
                        <h1 className="template-title">Result Boolean</h1>
                        <h3 className="template-subtitle">Disease Name</h3>
                        <p className="template-desc">Description</p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}