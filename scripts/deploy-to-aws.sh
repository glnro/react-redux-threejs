ssh -i $AWS_KEY $AWS_BOX
docker ps -a
#docker pull lgallinaro/rr3js
docker run -i -t -p 80:3001 lgallinaro/rr3js
