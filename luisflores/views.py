from luisflores import app
from flask import render_template

# TODO:
# @app.route('/')
# def index():
#     return render_template('index.html',home='active')

# @app.route('/about')
@app.route('/')
def about():
	return render_template('about.html',about='active')