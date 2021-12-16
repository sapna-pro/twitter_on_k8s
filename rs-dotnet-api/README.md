# WebAPI for Rockstar Web App - ASP.NET Web Api

This is a ASP.NET Core Web API project consiting of APIs to fetch song lyrics.

## Steps to run on DockerHub:

1. Clone the repository `https://github.com/Cvam06/CSYE7220.git`
    ```sh
   git clone git@github.com:Cvam06/CSYE7220.git
    ```
2. Navigate to Assignment 4 directory
    ```sh
    cd Assignment4/rs-dotnet-api
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
   docker build -t <YOUR_DOCKER_ID>/rs-dotnet-api .
   ```
6. Push Docker Image to your DockerHub Repository
   ```sh
   docker push <YOUR_DOCKER_ID>/rs-dotnet-api  
   ```
7. Build & Run Container using the Docker Image in particular Docker Network
   ```sh
   docker container run --network <YOUR_NETWORK_NAME> --name rs-dotnet-api --rm -p 5001:80  <YOUR_DOCKER_ID>/rs-dotnet-api
   ```

This will start the server. Navigate to http://localhost:5001 and test following endpoints

## API Endpoints
- GET `/testHealth`- returns 'Here at DotNet API GetHealth!'.
- GET `/Song/Miracle` - Returns Lyrics of Miracle .
- GET `/Song/JTWY` - Returns Lyrics of Just the way you are.
- GET `/Song/FFA` - Returns Lyrics of Don't Give Up On Me.