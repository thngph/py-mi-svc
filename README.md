# Python Microservices + Vue: Drag-drop file converter

This scalable system is designed to convert video to audio.

## System overview
Microservice architectures and distributed systems using Python, Kubernetes, RabbitMQ, MongoDB, mySQL.

<p align="center">
<img src="https://github.com/thngph/py-mi-svc/assets/67597758/26a8f8a6-65f0-4a7e-a153-30f88ab3666b" alt="drawing" width="500"/>
</p>

### Services
- gateway: receives and responds to user requests; saves/retrieves files to/from the database.
- auth: authenticates and authorizes user requests.
- converter: listens to the message queue and converts video to audio, emits a message to notification service once done converting.
- notification: listens to the message queue to notify the user when the audio is ready.
- rabbit: distribute messages among services.

### Databases
- MySQL: stores users.
- MongoDB: stores files.

## Web page frontend
Drag-drop interface to upload and download files from the server.

https://github.com/thngph/py-mi-svc/assets/67597758/a330675d-708b-4333-a76d-20e4954afbbf

