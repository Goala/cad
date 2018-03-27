#!/bin/sh
docker-compose down;
git pull;
mvn -f frontend install;
mvn -f backend clean install;
docker-compose build;
docker-compose up -d;