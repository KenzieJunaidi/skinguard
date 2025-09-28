from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.efficientnet import preprocess_input

import numpy as np
import io
from PIL import Image
from flask_cors import CORS

class_names = {
    0: "Atopic Dermatitis",
    1: "Benign Keratosis-like Lesions (BKL)",
    2: "Basal Cell Carcinoma",
    3: "Eczema",
    4: "Fungal Infections",
    5: "Melanocytic Nevi",
    6: "Melanoma",
    7: "Psoriasis / Lichen Planus",
    8: "Seborrheic Keratoses",
    9: "Viral Infections"
}

category = {
    0: "Low",   # Atopic Dermatitis - not cancerous
    1: "Low",   # Benign Keratosis-like Lesions (BKL) - benign
    2: "High",  # Basal Cell Carcinoma - skin cancer
    3: "Low",   # Eczema - non-cancerous
    4: "Alert", # Fungal Infections - treatable but needs care
    5: "Low",   # Melanocytic Nevi - moles, usually benign
    6: "High",  # Melanoma - serious skin cancer
    7: "Alert", # Psoriasis / Lichen Planus - chronic, needs management
    8: "Low",   # Seborrheic Keratoses - benign
    9: "Alert"  # Viral Infections - contagious, needs treatment
}

recommendations = {
    0: [
        "Apply fragrance-free moisturizers on a regular basis to keep the skin barrier healthy and hydrated.",
        "Try to avoid known irritants such as harsh soaps, fragrances, or allergens that may trigger flare-ups.",
        "If symptoms persist or worsen, consult a dermatologist for professional guidance and treatment."
    ],
    1: [
        "Perform regular self-checks on your skin to monitor any new growths or changes in existing spots.",
        "Use sunscreen and protective clothing to reduce sun exposure, as UV rays can make lesions worse.",
        "Seek medical advice if you notice changes in size, color, or texture of the affected areas."
    ],
    2: [
        "Consult a dermatologist as soon as possible, since early treatment can greatly improve outcomes.",
        "Prompt medical care can prevent the carcinoma from spreading and reduce long-term complications.",
        "Use broad-spectrum sunscreen daily to protect your skin from harmful UV rays and lower the risk of recurrence."
    ],
    3: [
        "Moisturize your skin frequently with gentle, fragrance-free lotions to reduce dryness and itching.",
        "Avoid harsh soaps, detergents, or hot showers, as they can strip away natural oils and worsen symptoms.",
        "If flare-ups become severe, seek medical advice for prescription treatments and long-term care."
    ],
    4: [
        "Keep the affected area clean, dry, and well-ventilated to limit fungal growth.",
        "Follow antifungal treatments exactly as prescribed by your doctor or pharmacist to ensure effectiveness.",
        "Avoid sharing towels, clothing, or personal items to reduce the risk of spreading the infection to others."
    ],
    5: [
        "Keep an eye on moles and birthmarks, checking for changes in size, shape, or color over time.",
        "Protect your skin with sunscreen and clothing to prevent UV-induced changes.",
        "Consult a dermatologist immediately if you notice unusual changes, bleeding, or itching in a mole."
    ],
    6: [
        "Seek immediate medical attention, as melanoma is a serious form of skin cancer that requires urgent care.",
        "Early detection and proper treatment are crucial to prevent the cancer from spreading to other areas.",
        "Use sun protection consistently, including sunscreen, hats, and clothing, to reduce future risks."
    ],
    7: [
        "Follow your dermatologist’s treatment plan carefully, as consistent care is key for managing symptoms.",
        "Apply moisturizers regularly to reduce dryness, redness, and itching associated with flare-ups.",
        "Schedule regular check-ups with a dermatologist to adjust treatment for long-term management."
    ],
    8: [
        "These growths are generally harmless, but keep monitoring them for any unexpected changes in appearance.",
        "No treatment is needed unless they cause irritation or you prefer removal for cosmetic reasons.",
        "Consult a dermatologist if lesions change in size, bleed, or become painful."
    ],
    9: [
        "Avoid close physical contact to reduce the risk of spreading the infection to others.",
        "Take antiviral or other prescribed medications exactly as directed by your healthcare provider.",
        "Maintain good personal hygiene, such as washing hands regularly and keeping affected areas clean."
    ]
}

app = Flask(__name__)
CORS(app) 

model = load_model("./tuned.keras")

def preprocess(img):
    img = img.resize((224,224))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = preprocess_input(img_array)  # <-- use this, not /255.0
    return img_array

    return img_array

@app.route("/", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error" : "No file uploaded"}), 400

    file = request.files["file"]
    img = Image.open(io.BytesIO(file.read()))

    processed_img = preprocess(img)
    prediction = model.predict(processed_img)

    # predicted_class = np.argmax(prediction, axis=1)[0]
    # class_name = class_names[predicted_class]
    # confidence = float(np.max(prediction))

    probs = prediction[0]
    top3_indices = np.argsort(probs)[-3:][::-1]
    top3 = [
        {"class": class_names[i], "confidence": float(probs[i]), "category": category[i], "rec": recommendations[i]} for i in top3_indices
    ]

    return jsonify({"prediction": top3})

if __name__ == "__main__":
    app.run(debug=True)
