from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound

simple_page = Blueprint('itemz', __name__)

@simple_page.route('/')
def main_item():
    return "You have reached main page of items", 200

@simple_page.route('/<page>')
def show(page):
    try:
        return f"I cannot show you the page {page}", 200
    except TemplateNotFound:
        abort(404)