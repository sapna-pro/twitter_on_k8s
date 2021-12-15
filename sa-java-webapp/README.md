
# Webapp Server for Sentiment Analysis - Spring Boot

This is a backend server built for serving requests to frontend for sentiment analysis. The logic layer is handled by a different server based on Flask.

## Steps to run on DockerHub:

1. Clone the repository `https://github.com/Cvam06/CSYE7220.git`
    ```sh
   git clone git@github.com:Cvam06/CSYE7220.git
    ```
2. Navigate to Assignment 4 directory
    ```sh
   cd Assignment\ 4/sa-java-webapp
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
   docker build -t <YOUR_DOCKER_ID>/sa-java-webapp .
   ```
6. Push Docker Image to your DockerHub Repository
   ```sh
   docker push <YOUR_DOCKER_ID>/sa-java-webapp 
   ```
7. Build & Run Container using the Docker Image in particular Docker Network
   ```sh
   docker container run --network <YOUR_NETWORK_NAME> --name sa-java-webapp --rm -p 8080:8080 <YOUR_DOCKER_ID>/sa-java-webapp
   ```

This will start the server. Navigate to http://localhost:8080 and test following endpoints

## API Endpoints
- GET `/` - Home Page.
- GET `/testHealth` - retuns 'Here at TestHealth Springboot App Sentiment Analysis!'.
- GET `/testComms` - Python Flask `/testHealth` endpoint.
- POST `/sentiment` - Post request with sentence key. Requests Flask server to calculate the polarity.