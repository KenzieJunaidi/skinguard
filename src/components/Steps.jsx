import { motion } from "framer-motion";

export const Steps = () => {
    return (
        <motion.section id="steps" className="steps">
            <motion.div className="steps-content">
                <motion.div className="steps-title"></motion.div>

                <motion.div className="cards-container">
                    <motion.div></motion.div>
                    <motion.div></motion.div>
                    <motion.div></motion.div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
} 