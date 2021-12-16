# Microservices on Kubernetes

## Pre-requisites

1. [Terraform](https://www.terraform.io/downloads.html)
2. [Kubectl](https://kubernetes.io/docs/tasks/tools/) - Optional just for local testing

# react-python-java-dotnet

# introduction

1. This is a Sentiment analysis with a Microservice application
2. It has four parts
3. SA-Frontend - A ReactJS MVVM application for frontend which accepts user inputs
4. SA-WebApp - A Java WebAPI Web App that handles requests from the frontend and routes requests to SA-Logic
5. SA-Logic - A Python WebAPI application that performs Sentiment Analysis
6. Dotnet - A dotnet api that return the requested song lyrics
Sentiment Analysis is an important part of bot-based enterprise apps: Capturing sentiment critical to a smooth-running enterprise

# Workflow

1. For this application there is fully set up CI/CD pipeline. It triggerd for every commit and build.
2. Once user commit changes to repository pipeline and build new Docker image of application and push to DockerHub
3. pipeline alredy configured with kubectl  
4. Using kubectl pipeline will deploy to k8s cluster
5. performing load testing and load balacing on Azure
6. Genetating load with Jmeter
7. Monitore application on Promethus

# Tools

1. CI/CD using CircleCI
2. Load testing using Jmeter
3. Monitoring using Promethus
4. Infrastructure as a code using terraform

Screenshot

![App]https://github.com/sapna-pro/twitter_on_k8s/images/app.png)
![Prometheus]https://github.com/sapna-pro/twitter_on_k8s/images/jmeter.png)