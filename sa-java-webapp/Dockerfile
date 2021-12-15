FROM openjdk:11
# Environment Variable that defines the endpoint of sentiment-analysis python api: 
ENV SA_LOGIC_API_URL http://sa-logic:5000
ADD sa-java-webapp/target/sentiment-analysis-web-0.0.1-SNAPSHOT.jar / 
CMD ["java", "-jar", "sentiment-analysis-web-0.0.1-SNAPSHOT.jar", "--sa.logic.api.url=${SA_LOGIC_API_URL}"]