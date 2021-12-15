# Spring Boot Server for Sentiment Analysis 

This is a backend server built for serving requests to frontend for sentiment analysis. The logic layer is handled by a different server based on Flask.

## Docker network

Create a common network in docker if you have not created one, by running the following command:

```
docker network create <YOUR_NETWORK_NAME>
```

## Run the container

After you have pulled the image, you can use that image to run a container. Run the container with the following command:

```
docker run --name sa-java-webapp --network <YOUR_NETWORK_NAME> --rm -p 8080:8080 cvam612/sa-java-webapp
```

You can check if the container is running on the desired network by running the following command:

```
docker inspect <YOUR_NETWORK_NAME>
```

It will show the network information with all the containers running on it.