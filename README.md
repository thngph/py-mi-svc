# Python Microservices + Vue: Drag-drop file converter

This repository contains a scalable system designed for converting video files to audio files. The system utilizes a microservice architecture and distributed systems implemented in Python, along with Kubernetes, RabbitMQ, MongoDB, and MySQL.

## System overview
This repository contains a scalable system designed for converting video files to audio files. The system utilizes a microservice architecture and distributed systems implemented in Python, along with Kubernetes, RabbitMQ, MongoDB, and MySQL.

<p align="center">
<img src="https://github.com/thngph/py-mi-svc/assets/67597758/26a8f8a6-65f0-4a7e-a153-30f88ab3666b" alt="drawing" width="500"/>
</p>

### Services
The system includes the following services:

Gateway: This service receives and responds to user requests. It also handles the storage and retrieval of files in the database.
Auth: Responsible for authenticating and authorizing user requests.
Converter: Listens to the message queue, converts video files to audio files, and emits a message to the notification service once the conversion is complete.
Notification: Listens to the message queue and sends notifications to users when their audio files are ready.
Rabbit: This service facilitates the distribution of messages among the various services.
### Databases
The system employs the following databases:

MySQL: This database stores user information.
MongoDB: It is used to store files.

## Web Page Frontend
The system provides a user-friendly web interface with a drag-and-drop feature for uploading and downloading files from the server. The frontend is built using Vue.js. ~~(Don't expect much cuz I'm new to Vue)~~

https://github.com/thngph/py-mi-svc/assets/67597758/a330675d-708b-4333-a76d-20e4954afbbf

Feel free to explore the repository for more details and code implementation.

~~Just realized that I should have added some sort of effects to minimize user confusion~~
