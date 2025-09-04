import { motion } from "framer-motion";

export const Steps = () => {
    return (
        <motion.section id="steps" className="steps">
            <motion.div className="steps-content">
                <motion.div className="steps-title">
                    <motion.h1>3 Steps</motion.h1>
                    <motion.h3>TO KEEP YOUR SKIN IN CHECK</motion.h3>
                </motion.div>

                <motion.div className="cards-container">
                    <motion.div className="card" whileHover={{ translateY: -10 }} transition={{ duration: 0.6 }}>
                        <img src="/icon-background.png" alt="Icon Background"></img>
                        <i className="fas fa-cloud-arrow-up" style={{ fontSize: "5rem", color: "black" }}/>
                        <motion.h3>Upload or Take a Photo</motion.h3>
                        <motion.p>Choose an existing photo from your device or take a new one using your camera.</motion.p>
                        <br></br>
                        <motion.p>Make sure the skin area is clear, well-lit, and in focus.</motion.p>
                    </motion.div>
                    <motion.div className="card" whileHover={{ translateY: -10 }} transition={{ duration: 0.6 }}>
                        <img src="/icon-background.png" alt="Icon Background"></img>
                        <i className="fas fa-brain" style={{ fontSize: "5rem", color: "black" }}/>
                        <motion.h3>AI Analysis</motion.h3>
                        <motion.p>Our AI model scans the image using advanced deep learning techniques.</motion.p>
                        <br></br>
                        <motion.p>It compares patterns against <item style={{fontWeight: 700}}>thousands</item> of known skin disease cases.</motion.p>
                    </motion.div>
                    <motion.div className="card" whileHover={{ translateY: -10 }} transition={{ duration: 0.6 }}>
                        <img src="/icon-background.png" alt="Icon Background"></img>
                        <i className="fas fa-chart-line" style={{ fontSize: "5rem", color: "black" }}/>
                        <motion.h3>Get Results & Insights</motion.h3>
                        <motion.p>Know whether the condition looks benign <item style={{ fontWeight: 700, color: '#4CAF50'}}>safe</item> or potentially harmful.</motion.p>
                        <br></br>
                        <motion.p>You’ll also see possible disease categories (e.g., Acne, Melanoma, Psoriasis).</motion.p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
} 