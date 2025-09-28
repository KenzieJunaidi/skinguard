import { motion } from "framer-motion";

export const About = () => {
    return (
        <motion.section className="about">
            <div className="about-title">
                <motion.h2>How Does It Work?</motion.h2>
                <motion.h5>This tool provides preliminary insights into common skin conditions. It is not a medical diagnosis and should be used for educational purposes. For any concerns, consult a qualified healthcare professional.</motion.h5>
            </div>
            
            <div className="about-container">
                <motion.div className="about-card">
                    <div className="number">
                        <h3>1</h3>
                    </div>
                    <h5>Capture a clear photo</h5>
                    <p>Ensure good lighting and focus on the area of concern. Avoid heavy filters or obstructions.</p>
                </motion.div>
                <motion.div className="about-card">
                    <div className="number">
                        <h3>2</h3>
                    </div>
                    <h5>Upload & Analyze</h5>
                    <p>Our ResNet Model analyzes visual patterns and returns likely categories.</p>
                </motion.div>
                <motion.div className="about-card">
                    <div className="number">
                        <h3>3</h3>
                    </div>
                    <h5>Review results</h5>
                    <p>See the predicted category, confidence score, and guidance on next steps.</p>
                </motion.div>
            </div>
            <div className="limitation-container">
                <motion.div className="solo-card">
                    <h5>Limitations & Ethics</h5>
                    <ul>
                        <li>Results are probabilistic and may be inaccurate.</li>
                        <li>Model performance can vary based of image quality.</li>
                        <li>This demo does not store your image. Always protect sensitive information.</li>
                        <li>Seek medical advice for diagnosis and treatment. This is not a substitute for professional care.</li>
                    </ul>
                </motion.div>
            </div>
            <hr id="detect"></hr>
        </motion.section>
    );
} 