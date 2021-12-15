# Sentiment Analysis with Python Flask

This is a Python flask server built for serving requests to find polarity of sentences.

## Docker network

Create a common network in docker if you have not created one, by running the following command:

```
docker network create <YOUR_NETWORK_NAME>
```

## Run the container

After you have pulled the image, you can use that image to run a container. Run the container with the following command:

```
docker run --name sa-flask-logic --network <YOUR_NETWORK_NAME> --rm -p 5050:5050 cvam612/sa-flask-logic
```

You can check if the container is running on the desired network by running the following command:

```
docker inspect <YOUR_NETWORK_NAME>
```

It will show the network information with all the containers running on it.