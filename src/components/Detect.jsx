import { motion } from "framer-motion";
import { useState } from "react";
import { Switch } from "./Switch/Switch";

export const Detect = () => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [result, setResult] = useState(null);

    const handleAnalyze = async () => {
        if (!selectedImage) return;

        const formData = new FormData();
        formData.append("file", selectedImage);

        try {
            const res = await fetch("http://127.0.0.1:5000/detect", {
            method: "POST",
            body: formData,
            });

            if (!res.ok) {
            throw new Error(`Server error: ${res.status}`);
            }

            const data = await res.json();
            setResult(data);
            console.log("Prediction:", data);
        } catch (err) {
            console.error("Fetch error:", err);
        }
    };

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
                            <img className="detect-image" width={400} height={400} src={previewImage ? previewImage : '/null.png'} alt="Insert Image"/>
                            <motion.label for="fileInput" className="custom-input" whileTap={{ scale: 0.95 }}>Upload Image</motion.label>
                            <input 
                                id="fileInput"
                                type="file" 
                                accept="image/*"
                                hidden
                                onChange={(e) => {
                                    const img_file = e.target.files?.[0];
                                    
                                    if(img_file){
                                        setSelectedImage(img_file);
                                        setPreviewImage(URL.createObjectURL(img_file));
                                    }
                                }}
                            />
                        </motion.div>
                    
                        <motion.div className="detect-options">
                            <Switch />
                            <motion.button className="detect-button" onClick={handleAnalyze} whileTap={{ scale: 0.95 }}>Scan</motion.button>
                        </motion.div>
                    </motion.div>

                    <motion.div className="small-box">
                        <motion.div className="small-box-1">
                            <p>RESULT</p>
                            
                            {result && <p>AI Prediction: {JSON.stringify(result)}</p>}
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
