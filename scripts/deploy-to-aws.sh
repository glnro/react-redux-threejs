ssh -i $AWS_KEY $AWS_BOX
docker ps -a
#docker pull lgallinaro/rr3js
#docker build -t lgallinaro/rr3js .
docker run -i -t lgallinaro/rr3js
