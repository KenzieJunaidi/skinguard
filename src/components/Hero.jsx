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
                    <img src="/hero-background.jpg" alt="Face Image" />

                    <motion.div className="info-box">
                        <h1 className="template-title">92%</h1>
                        <h3 className="template-subtitle">ACTINIC KERATOSIS (AK)</h3>
                        <p className="template-desc-header">Warning</p>
                        <p className="template-desc">Rough, scaly patch from sun damage that can turn into skin cancer if untreated. Common on the face, scalp, and hands, it’s treated with freezing or topical meds. Sun protection helps prevent it.</p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}