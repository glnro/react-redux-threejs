const http = require('http')
const port = 4000

const requestHandler = (req, res) => {
  res.end('Node.js Server is running');
}

const server = http.createServer(requestHandler)

server.listen(port, (error) => {
  if(error){
    return console.log('An error occured:', error);
  }

  console.log(`Test server is listening on ${port}`);
})

module.exports = server;
