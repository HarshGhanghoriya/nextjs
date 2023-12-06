#!/bin/bash

 

cd /home/ubuntu/projects/elchemy-fe/

 

sudo git pull origin development
sudo docker-compose up -d --build

 

sudo docker system prune -f --all
