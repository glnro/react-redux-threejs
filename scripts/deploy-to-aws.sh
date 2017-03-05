#!bin/bash

ssh -i $AWS_KEY $AWS_BOX
docker pull lgallinaro/rr3js
docker build -t lgallinaro/rr3js
docker run lgallinaro/rr3js
