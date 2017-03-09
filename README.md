[![Build Status](https://travis-ci.org/GLNRO/react-redux-threejs.svg?branch=master)](https://travis-ci.org/GLNRO/react-redux-threejs)

# react-redux-threejs
Template for React, Redux &amp; Three.js application

### Set Up

##### Install dependencies
```bash
npm install
```

##### Build application
```bash
npm build
```

##### Start Application
```bash
npm start
```

The application will be running on localhost:3001

##### Run Tests
```bash
npm test
```

This application is running mocha for unit testing and nightwatch for functional testing



#### Docker Setup

##### Building the Image
```bash
docker build -t lgallinaro/rr3js .
```

##### Pull Latest Image
```bash
docker pull lgallinaro/rr3js
```

##### Run the Container
```bash
docker run -it -p 80:3001 lgallinaro/rr3js
```

##### Access Container
```bash
docker exec -it lgallinaro/rr3js
```
