import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <motion.section id="hero" className="hero">
            <div className="hero-container">
                <motion.div className="hero-content">
                    <motion.div className="headline">
                        <h1 style={{color: "var(--accent-color)"}}>AI-Powered</h1>
                        <h1>Skin Lesion Check</h1>
                    </motion.div>
                    <h2 className="subtitle">Upload a photo of a mole or lesion and get instant AI-driven insights to support early skin health awareness.</h2>
                    <p className="note">
                        <i class="fas fa-exclamation-triangle" style={{color: "#f1c40f"}}></i> This tool does not provide a medical diagnosis. Please consult a dermatologist.
                    </p>
                    <motion.a className="cta-btn">Check My Skin</motion.a>
                </motion.div>

                <motion.div className="hero-image">
                    <img src="/attempt.jpg" alt="Face Image" />
                    <motion.div className="info-box">

                        {/* Semi-transparent background (rgba(0,0,0,0.5)) works well for floating over images.
                        Rounded corners and subtle shadow to separate from the image.
                        Use light text if background is dark, or dark text if the overlay is light. */}
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}