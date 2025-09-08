import './Switch.css';
import { motion } from "framer-motion";
import { useState } from "react";

export const Switch = () => {

    const [isSwitch, setIsSwitch] = useState(false);

    return (
        <motion.div className="container" onClick={() => setIsSwitch(prev => !prev)}>
            <motion.div className={`circle ${isSwitch ? "right" : "left"}`}>
                {isSwitch ? <i className="fa-solid fa-camera" style={{ fontSize: "1.25rem", color: "rgba(0,0,0,0.9)" }}></i> : <i className="fa-solid fa-arrow-up-from-bracket" style={{ fontSize: "1.25rem", color: "rgba(0,0,0,0.9)" }}></i> }
            </motion.div>
        </motion.div>
    );
}