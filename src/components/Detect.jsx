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
                        <Switch />
                    </motion.div>

                    <motion.div className="small-box">
                        <motion.div className="small-box-1">
                          
                        </motion.div>

                        <motion.div className="small-box-2">

                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
} 