from flask import Flask
from flask_cors import CORS
from routes import item_routes

app = Flask(__name__)
app.register_blueprint(item_routes.simple_page, url_prefix="/itemz")
CORS(app)


# Get an item by id
@app.route("/item/<id>")
def get_item_id(id):
    if 2 == int(id):
        return "Item retrieved", 200
    else:
        return "Invalid argumetn supplied", 400

# Get an items for a page
@app.route("/items/<page>")
def get_item_page(page):
    return f"Items at page {page} returned", 200

@app.route("/")

# Probably an overkill
@app.route("/item/all")
def get_item_all():
    return "All items retrieved", 200
