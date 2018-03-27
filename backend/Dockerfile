FROM java:openjdk-8u91-jdk
EXPOSE 8080
CMD java -jar -Dspring.profiles.active=prod backend*.jar
ADD target/backend*.jar .
