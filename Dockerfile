FROM maven:3.5.3-jdk-8
EXPOSE 8080
COPY ./backend /backend
COPY ./frontend /frontend
RUN mvn -f /frontend clean install
RUN mvn -f /backend clean install

CMD java -jar -Dspring.profiles.active=prod /backend/target/backend*.jar
