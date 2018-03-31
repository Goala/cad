#!/bin/sh
docker-compose down;
git pull;
/usr/local/bin/docker-compose build;
/usr/local/bin/docker-compose up -d;