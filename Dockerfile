FROM node:latest

RUN mkdir -p /usr/app
COPY package.json /user/app/
WORKDIR /usr/app

COPY . /usr/app
RUN npm install

EXPOSE 4000
CMD ["npm","start"]
