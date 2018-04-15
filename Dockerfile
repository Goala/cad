FROM java:openjdk-8u91-jdk
EXPOSE 8080
CMD java -jar -Dspring.profiles.active=prod -Damazon.aws.accesskey=$ACCESSKEY -Damazon.aws.secretkey=$SECRETKEY backend*.jar
COPY backend/target/backend*.jar .
