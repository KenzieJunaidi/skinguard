import './Switch.css';
import { motion } from "framer-motion";
import { useState } from "react";

export const Switch = () => {

    const [isSwitch, setIsSwitch] = useState(false);

    return (
        <motion.div className={`container ${isSwitch ? "right" : ""}`} onClick={() => setIsSwitch(prev => !prev)}>
            <motion.div className="circle">

            </motion.div>
        </motion.div>
    );
}