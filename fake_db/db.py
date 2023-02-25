from flask import Flask
import data_models
from flask_cors import CORS

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"