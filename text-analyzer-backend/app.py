try:
    from PIL import Image
except ImportError:
    import Image
import pytesseract
import os
from flask import Flask, json, request, session, make_response
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin

def ocr_core(file):
    pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files (x86)\Tesseract-OCR\tesseract'
    text = pytesseract.image_to_string(Image.open(file))
    return text

# Set variables to save image
UPLOAD_FOLDER = os.getcwd() + '\\images'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# POST Method
@app.route('/api/', methods=['POST'])
def fileUpload():
    # Save the image locally
    target=os.path.join(UPLOAD_FOLDER)
    if not os.path.isdir(target):
        os.mkdir(target)
    file = request.files['file']
    filename = secure_filename(file.filename)
    destination="/".join([target, filename])
    file.save(destination)
    session['uploadFilePath']=destination

    # Process the image
    text = ocr_core("images/" + filename)

    message = {
        "text" : text
    }

    resp = make_response(message)
    resp.headers['Content-Type'] = "application/json"
    return resp

if __name__ == "__main__":
    app.run()






