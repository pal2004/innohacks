from flask import Flask, request, jsonify
from keras.models import load_model
import numpy as np

app = Flask(__name__)

# Load the pre-trained model
model = load_model('data.h5')

# Define a route for making predictions
@app.route('/predict', methods=['POST'])
def predict():
    # Get the data from the request
    data = request.json
    
    # Assuming the data is in the form of a list of input values
    input_data = np.array(data['input'])
    
    # Perform any necessary data preprocessing
    # e.g., scaling, reshaping
    
    # Make predictions using the loaded model
    predictions = model.predict(input_data)
    
    # Assuming the model output is a single value or a list of values
    # Convert predictions to a format suitable for JSON response
    output = {'predictions': predictions.tolist()}
    
    # Return the predictions as JSON
    return jsonify(output)

if __name__ == '__main__':
    app.run(debug=True)
