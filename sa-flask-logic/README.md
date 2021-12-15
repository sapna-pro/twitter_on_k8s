# Sentiment Analysis with Python Flask

This is a Python flask server built for serving requests to find polarity of sentences.

## Steps to run on DockerHub:

1. Clone the repository `https://github.com/Cvam06/CSYE7220.git`
    ```sh
   git clone git@github.com:Cvam06/CSYE7220.git
    ```
2. Navigate to Assignment 4 directory
    ```sh
   cd Assignment4/sa-flask-logic/sa
    ```
3. Create a Docker Network
    ```sh
   docker network create <YOUR_NETWORK_NAME>
   ```
4. Login to DockerHub Account using DockerHub credentials 
    ```sh
   docker login -u <YOUR_DOCKER_ID> -p <YOUR_DOCKER_PASSWORD>
   ```
5. Build Docker Image using Dockerfile
   ```sh
   docker build -t <YOUR_DOCKER_ID>/sa-flask-logic .
   ```
6. Push Docker Image to your DockerHub Repository
   ```sh
   docker push <YOUR_DOCKER_ID>/sa-flask-logic 
   ```
7. Build & Run Container using the Docker Image in particular Docker Network
   ```sh
   docker container run --network <YOUR_NETWORK_NAME> --name sa-flask-logic --rm -p 5050:5050 <YOUR_DOCKER_ID>/sa-flask-logic
   ```
This will start the server. Navigate to http://localhost:5050 and test following endpoints

## API Endpoints
- GET `/testHeath`- returns 'Here at Flask App Sentiment Analysis!'.
- GET `/testComms` - Test Springboot WebApp container endpoint - calls Java `/testHealth` endpoint.
- POST `/analyse/sentiment` - Post request with sentence param and returns the calculated polarity of that sentence.