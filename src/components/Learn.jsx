import { motion } from "framer-motion";

export const Learn = () => {
    return (
        <motion.section id="learn" className="learn">
            <motion.div className="learn-content">

                <motion.div className="learn-title">
                    <motion.h1>Understand</motion.h1>
                    <motion.h3>Your guide to better understanding and caring for your skin.</motion.h3>
                </motion.div>

                <motion.div className="box-container">
                    <motion.div className="large-box">
                        <motion.h5>10 Skin Diseases</motion.h5>

                        <motion.p>Safe</motion.p>
                        <ul>
                            <li>Melanocytic Nevus (NV)</li>
                            <li>Seborrheic Keratosis (SK)</li>
                            <li>Dermatofibroma (DF)</li>
                            <li>Solar Lentigo (SL)</li>
                            <li>Benign Keratosis Lesions (BKL)</li>
                        </ul>

                        <motion.p>Dangerous</motion.p>

                        <ul>
                            <li>Melanoma (MEL)</li>
                            <li>Basal Cell Carcinoma (BCC)</li>
                            <li>Squamous Cell Carcinoma (SCC)</li>
                            <li>Actinic Keratosis (AKIEC)</li>
                            <li>Vascular Lesions (VASC)</li>
                        </ul>
                    </motion.div>

                    <motion.div className="small-box">
                        <motion.div className="small-box-1">
                            <motion.h5>Early Signs to Look For:</motion.h5>
                            <motion.p>ABCDE Rule</motion.p>
                            <ul>
                                <li>A - Asymmetry: One half doesn’t match the other.</li>
                                <li>B - Border: Edges are irregular, blurred, or jagged.</li>
                                <li>C – Color: Multiple shades (brown, black, red, white, blue).</li>
                                <li>D – Diameter: Larger than 6mm (about a pencil eraser).</li>
                                <li>E – Evolving: Changes in size, shape, or color over time.</li>
                            </ul>
                        </motion.div>

                        <motion.div className="small-box-2">
                            <motion.h5>Prevention Tips</motion.h5>
                            <ul>
                                <li>☀️ Use Sunscreen – Protect your skin with SPF 30+ daily.</li>
                                <li>🧢 Seek Shade – Avoid direct sun between 10am–4pm.</li>
                                <li>💧 Stay Hydrated – Drink enough water to keep your skin healthy.</li>
                                <li>🍎 Eat Nutritiously – Vitamins and antioxidants help skin repair.</li>
                                <li>🚭 Avoid Smoking – Keeps skin stronger and reduces damage.</li>
                            </ul>
                            </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
} 