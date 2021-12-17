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

## Technology stack used

* Front End - [React](https://reactjs.org/)
* Back End  - [Flask](https://palletsprojects.com/p/flask/) [Java](https://www.oracle.com/java/technologies/)
              [dotnet](https://dotnet.microsoft.com/en-us/)
* Cloud     - [AWS](https://aws.amazon.com/)
            - [Azure](https://azure.microsoft.com/en-us/features/azure-portal/)
* IaaS      - [Terraform](https://www.terraform.io/) - infrastructure folder
* Container Orchestration - [EKS](https://aws.amazon.com/eks/)
                            [AKS](https://cloud.google.com/kubernetes-engine)
* Automation - [CircleCI](https://circleci.com/)
* Load Testing - [JMeter](https://jmeter.apache.org/)
* Monitoring - [Prometheus](https://prometheus.io/)
* Alert Manager

## How to run the project

### 1. Infra setup

Here we are using Amazon Elastic Kubernetes Service as Infrastructure where the Kubernetes pods will be made run.

Go to Terraform folder and run the below steps:-

```bash
$ terraform init
```

```bash
$ terraform apply -auto-approve 
```

### 2. CI/CD automation using CircleCI

Once the infrastructure is UP and running >>>

Then go to [CircleCI](https://circleci.com/) and link it with your Github account. Add following environment variables - 

1. AWS_ACCESS_KEY_ID - Your AWS account access key
2. AWS_DEFAULT_REGION - AWS account default region e.g us-east-1
3. AWS_REGION - similar to AWS_DEFAULT_REGION
4. AWS_SECRET_ACCESS_KEY - Your AWS account secret access key
5. DockerUsername - your docker hub repo username
6. DockerPassword - your docker hub repo password

Configuring local machine with the infrastructure created
```bash
$ terraform output kubeconfig > C:/Users/<username>/.kube/config-terraform-eks-demo
$ terraform output config_map_aws_auth > ./config-map-aws-auth.yml
```

Take the backup of already present kube config file
```bash
$ cp C:/Users/<username>/.kube/config C:/Users/<username>/.kube/config.bak
```

```bash
$ cp C:/Users/<username>/.kube/config-terraform-eks-demo C:/Users/<username>/.kube/config
```

To check your local machine connected with EKS cluster 
```bash
$ kubectl get nodes
```

Now these files (config-map-aws-auth.yml and config) needs to be present in the root folder of github repository. Push this files to github repository
```bash
$ git add --all
$ git commit -m "Adding kube config & config-map-aws-auth.yml"
$ git push origin <branch name>
```
It will automatically trigger CircleCI pipeline. And the dashboard of CircleCI will help you understand the code build stats very crystal and clear.

Detailed work implemented in config.yml (.cicleci folder) -

After any application code update pushed in Github repo will initiate the steps below: 

Workflow 1:

* Code checkout from Github
* Installions
* Creating docker image for backend and pushing it to docker hub image repo
* Kubectl configuration to apply deployments and load balancer to back-end layer
* Similarly, creating docker image for frontend and pushing to docker hub
* Kubectl configuration to apply deployments and load balancer to front-end layer which will be automatically linked with back-end layer

Workflow 2:

* Code checkout from Github
* Connecting with Google cloud cluster
* Deploy the front-end image created before on the cluster along with load balancer.
* Autoscaling is configured in Terraform to scale them up or down

Screenshot

![App](https://github.com/sapna-pro/twitter_on_k8s/images/app.png)
![Prometheus](https://github.com/sapna-pro/twitter_on_k8s/images/jmeter.png)

### Developers

* Sapna Patel
* Shivam Thakkar
