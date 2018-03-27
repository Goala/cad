#!/bin/sh
docker-compose down;
git pull;
mvn -f frontend install;
mvn -f backend clean install;
/usr/local/bin/docker-compose build;
/usr/local/bin/docker-compose up -d;