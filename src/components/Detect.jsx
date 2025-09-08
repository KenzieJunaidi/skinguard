import { motion } from "framer-motion";
import { Switch } from "./Switch/Switch";

export const Detect = () => {
    return (
        <motion.section id="detect" className="detect">
            <motion.div className="detect-content">
                <motion.div className="detect-title">
                    <motion.h3>SOLUTION</motion.h3>
                    <motion.h1>Detect</motion.h1>
                </motion.div>

                <motion.div className="box-container">
                    <motion.div className="large-box">
                        <motion.div className="camera-space">
                            <input type="file" accept="image/*" />
                        </motion.div>
                    
                        <motion.div className="detect-options">
                            <Switch />
                            <motion.button className="detect-button" whileTap={{ scale: 0.95 }}>Scan</motion.button>
                        </motion.div>
                    </motion.div>

                    <motion.div className="small-box">
                        <motion.div className="small-box-1">
                            <p>RESULT</p>
                        </motion.div>

                        <motion.div className="small-box-2">
                            <p>HEALTH RECOMMENDATIONS</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
} 