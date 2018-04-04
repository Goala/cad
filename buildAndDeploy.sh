#!/bin/sh
docker-compose down;
git pull;
/usr/local/bin/docker-compose pull app;
/usr/local/bin/docker-compose up -d;