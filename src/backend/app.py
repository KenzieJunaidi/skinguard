from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

import numpy as np
import io
from PIL import Image
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

model = load_model("./epoch_09.h5")

def preprocess(img):
    img = img.resize((224,224))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array /= 255.0

    return img_array

@app.route("/detect", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error" : "No file uploaded"}), 400

    file = request.files["file"]
    img = Image.open(io.BytesIO(file.read()))

    processed_img = preprocess(img)
    prediction = model.predict(processed_img)

    return jsonify({"prediction": prediction.tolist()})

if __name__ == "__main__":
    app.run(debug=True)
