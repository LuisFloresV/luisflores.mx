from luisflores import app

@app.route('/')
def index():
    return 'Hello, I am Luis Flores. Bye!'