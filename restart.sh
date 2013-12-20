#!/bin/bash

date +"%c" >> restart.log

ID=$(pidof python)
kill -9 $ID

STATUS=$?

if [ $STATUS != 0 ]
then
	echo "Could not kill process with PID: $ID" >> restart.log
	return
fi

nohup /root/luisflores.mx/venv/bin/python runserver.py >> server.log 2>&1&

STATUS=$?

if [ $STATUS != 0 ]
then
	echo "Could not start server" >> restart.log
fi

echo "Server started" >> restart.log