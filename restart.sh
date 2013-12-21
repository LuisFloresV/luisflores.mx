#!/bin/bash

getTime() {
	echo "$(date +"%m-%d-%Y %T") - "
}

restart() {
	ID=$(pidof python)
	kill -9 $ID

	STATUS=$?


	if [ $STATUS != 0 ]
	then
		echo $(getTime) "Could not kill process with PID: $ID"
		return -1
	fi

	nohup /root/luisflores.mx/venv/bin/python runserver.py >> /var/log/luisflores/server.log 2>&1&

	STATUS=$?

	if [ $STATUS != 0 ]
	then
		echo $(getTime) "Could not start server"
		return -2
	fi

	echo $(getTime) "Server started"	
}

restart