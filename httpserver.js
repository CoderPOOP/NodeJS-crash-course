// Importing HTTP and Console to create a server
const http = require('http');
const {Console} = require('console');

// Defining the port to host the HTTP site
const port = process.env.PORT || 3000;

// Basic Syntax to "Create a Server"
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> HelloWorld! </h1>')
});

server.listen(port, ()=>{
    console.log(`Server is listening on Port: ${port}`);
});