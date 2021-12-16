# WebAPI for Rockstar Web App - ASP.NET Web Api

This is a ASP.NET Core Web API project consiting of APIs to fetch song lyrics.

## Docker network

Create a common network in docker if you have not created one, by running the following command:

```
docker network create <YOUR_NETWORK_NAME>
```

## Run the container

After you have pulled the image, you can use that image to run a container. Run the container with the following command:

```
docker run --name rs-dotnet-api --network <YOUR_NETWORK_NAME> --rm -p 5001:80 cvam612/rs-dotnet-api
```

You can check if the container is running on the desired network by running the following command:

```
docker inspect <YOUR_NETWORK_NAME>
```

It will show the network information with all the containers running on it.

## API Endpoints
- GET `/testHealth`- returns 'Here at DotNet API GetHealth!'.
- GET `/Song/Miracle` - Returns Lyrics of Miracle .
- GET `/Song/JTWY` - Returns Lyrics of Just the way you are.
- GET `/Song/FFA` - Returns Lyrics of Don't Give Up On Me.