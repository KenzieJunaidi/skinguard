from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.efficientnet import preprocess_input

import numpy as np
import io
from PIL import Image
from flask_cors import CORS

class_names = {
    0: 'Atopic_Dermatitis',
    1: 'BKL',
    2: 'Basal_Cell_Carcinoma',
    3: 'Eczema',
    4: 'Fungal_Infections',
    5: 'Melanocytic_Nevi',
    6: 'Melanoma',
    7: 'Psoriasis_LichenPlanus',
    8: 'Seborrheic_Keratoses',
    9: 'Viral_Infections'
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

@app.route("/detect", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error" : "No file uploaded"}), 400

    file = request.files["file"]
    img = Image.open(io.BytesIO(file.read()))

    processed_img = preprocess(img)
    prediction = model.predict(processed_img)

    predicted_class = np.argmax(prediction, axis=1)[0]
    class_name = class_names[predicted_class]
    confidence = float(np.max(prediction))

    return jsonify({"prediction": class_name, "confidence": confidence})

if __name__ == "__main__":
    app.run(debug=True)
