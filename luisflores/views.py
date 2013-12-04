from luisflores import app
from flask import render_template

@app.route('/')
def about():
	return render_template('about.html',about='active')