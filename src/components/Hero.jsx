import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {

    return (
        <motion.section id="hero" className="hero">
            <div className="hero-container">
                <motion.div className="hero-content">
                    <motion.h1>Skin Disease Detection <br/> Made Simple</motion.h1>
                    <motion.h3>Upload a skin image to get a fast preliminary classification, confidence score, and next-step guidance. Designed for educational use and early awareness.</motion.h3>
                
                    <motion.div className="btn-container">
                        <motion.a href="#detect" className="btn-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Try Detection</motion.a>
                        <motion.a href="#about" className="btn-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>How It Works</motion.a>
                    </motion.div>
                
                </motion.div>

                <motion.div className="hero-image">
                    <img src="./background.jpg" alt="hero-image"></img>
                </motion.div>
            </div>
            <div className="perks">
                <motion.div className="perk-card">
                    <h5>Fast & Simple</h5>
                    <p>Upload an image and receive a preliminary classification within seconds.</p>
                </motion.div>
                <motion.div className="perk-card">
                    <h5>Educational</h5>
                    <p>Confidence scores and helpful guidance to understand potential conditions.</p>
                </motion.div>
                <motion.div className="perk-card">
                    <h5>Private</h5>
                    <p>Images are processed only for classification. No data is stored in this demo.</p>
                </motion.div>
            </div>
            <hr id="about"></hr>
        </motion.section>
    );
}