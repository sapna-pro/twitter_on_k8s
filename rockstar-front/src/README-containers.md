# Rockstar App UI (React)

This project consists of the frontend part related to Rockstar application. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Docker network

Create a common network in docker if you have not created one, by running the following command:

```
docker network create <YOUR_NETWORK_NAME>
```

## Run the container

After you have pulled the image, you can use that image to run a container. Run the container with the following command:

```
docker run --name rockstar-front --network <YOUR_NETWORK_NAME> --rm -p 3000:80 cvam612/rockstar-front
```

You can check if the container is running on the desired network by running the following command:

```
docker inspect <YOUR_NETWORK_NAME>
```

It will show the network information with all the containers running on it.

## Testing the application

You can access the application by visiting : http://localhost:3000

Make sure you have the following image containers running inorder to test this container:
- cvam612/rs-dotnet-api
- cvam612/sa-java-webapp
- cvam612/sa-flask-logic

You should be able to call all different APIs by clicking on the buttons on HomePage.