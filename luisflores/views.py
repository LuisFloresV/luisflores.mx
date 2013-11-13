from luisflores import app

@app.route('/')
def index():
    return 'Hello, I\'m Luis Flores. Bye!'