import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const Detect = () => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [previewImageName, setPreviewImageName] = useState("");
    const [result, setResult] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const handleReset = () => {
        setSelectedImage(null);
        setPreviewImage(null);
        setPreviewImageName("");
        setResult(null);
        setErrorMessage("");
    }

    const handleAnalyze = async () => {
        if (!selectedImage){
            setErrorMessage("Please select an image first.");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedImage);

        try {
            const res = await fetch("http://127.0.0.1:5000/", {
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
        <motion.section className="detect">
            <div className="about-title">
                <motion.h2>Detect</motion.h2>
                <motion.h5>Upload a clear image of the skin area. You'll get a predicted category, confidence score, and educational guidance.</motion.h5>
            </div>

            <div className="detect-container">
                <motion.div className="box-1">
                    <motion.h5>Skin Image</motion.h5>

                    <motion.div className="input-container">
                        <input 
                            id="fileInput"
                            type="file" 
                            accept="image/*"
                            hidden
                            onChange={(e) => {
                                const img_file = e.target.files?.[0];
                                
                                if(img_file){
                                    setErrorMessage("");
                                    setSelectedImage(img_file);
                                    setPreviewImage(URL.createObjectURL(img_file));
                                    setPreviewImageName(img_file.name);

                                    setTimeout(() => {
                                        window.scrollTo({
                                        top: document.body.scrollHeight,
                                        behavior: "smooth",
                                        });
                                    }, 100);
                                }
                                e.target.value = null;
                            }}
                        />
                        <motion.p className="file-name">{previewImageName === "" ? "No File Chosen." : previewImageName}</motion.p>
                        <motion.button className="upload-btn" whileTap={{ scale: 0.95 }} onClick={() => document.getElementById("fileInput").click()}>Choose File</motion.button>
                    </motion.div>

                    <motion.div className={`preview-container ${!selectedImage ? "hide" : ""}`}>
                        <img src={previewImage} />
                    </motion.div>

                    <motion.div className="action-btns">
                        <motion.button className="analyze-btn" whileTap={{ scale: 0.95 }} onClick={handleAnalyze}>
                            Analyze Image
                        </motion.button>
                        <motion.button className="reset-btn" whileTap={{ scale: 0.95 }} onClick={handleReset}>
                            Reset
                        </motion.button>
                    </motion.div>

                    <motion.p className={`errorMsg ${errorMessage === "" ? "hide" : ""}`}>{errorMessage}</motion.p>
                </motion.div>

                <motion.div className="box-2">
                    {result ? 
                    <div>
                        <motion.div className="prediction-header">
                            <motion.div className="prediction-title">
                                <motion.h3>{result["prediction"][0]["class"]}</motion.h3>
                                <motion.h5>Confidence: {(result["prediction"][0]["confidence"] * 100).toFixed(2)}%</motion.h5>
                            </motion.div>

                            <motion.h5
                            style={{
                                backgroundColor:
                                result["prediction"][0]["category"] === "Low"
                                    ? "var(--low)"
                                    : result["prediction"][0]["category"] === "Alert"
                                    ? "var(--alert)"
                                    : result["prediction"][0]["category"] === "High"
                                    ? "var(--high)"
                                    : "transparent",
                                color: "var(--title-color)",
                                padding: "0.4rem 1rem",
                                fontSize: "1rem",
                                fontWeight: "600",
                                borderRadius: "50px",
                                display: "inline-block",
                            }}
                            >{result["prediction"][0]["category"]}</motion.h5>
                            
                        </motion.div>

                        <motion.div className="meter-container">
                            <motion.div className="meter">
                                <motion.div className="meter-fill"
                                style={{ width: `${(result["prediction"][0]["confidence"] * 100).toFixed(2)}%` }}
                                />
                            </motion.div>
                            <motion.p>Confidence Meter (0-100%)</motion.p>
                        </motion.div>   

                        <motion.div className="list-container">
                            <motion.h5>Top Predictions</motion.h5>
                            {result["prediction"].map((item, idx) => (
                                <motion.div key={idx} className="list-card">
                                    <motion.h5>{item.class}</motion.h5>
                                    <motion.p>{(item.confidence * 100).toFixed(2)}%</motion.p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div className="recommendation">
                            <motion.h5>What You Can Do</motion.h5>
                            <ul>
                                {result["prediction"][0]["rec"].map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div className="warning">
                            <p>Note: This is a proof-of-concept and not a medical diagnosis. For concerns, consult a qualified healthcare professional.</p>
                        </motion.div>         
                    </div>
                    :
                    <motion.h5 style={{ fontSize: "1.2rem" }}>{"Your result will appear here after analysis."}</motion.h5>
                    }
                </motion.div>
            </div>
        </motion.section>
    );
}
