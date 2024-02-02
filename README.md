# Event Registration Backend


## Overview

This project implements a backend service to handle user registrations for an event. Once the registration process is complete, the application utilizes RabbitMQ to communicate with another service responsible for sending confirmation emails to the registered users.
Features

- User Registration: The backend provides APIs to facilitate user registration for the specified event. Users can submit their details, and the system validates and stores the registration information.

- RabbitMQ Integration: After successful registration, the backend publishes a message to a RabbitMQ queue, notifying other services about the new registrations. This decoupling allows for scalable and modular communication between components.

- Email Confirmation: The RabbitMQ message triggers another service to send confirmation emails to the registered users, providing details about the event and any additional information.
- 
