import os
from luisflores import app

os_port = int(os.environ.get('PORT', 5000)) 
app.run(host='0.0.0.0', port=os_port)