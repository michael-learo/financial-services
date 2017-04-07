const http = require('http'),
    port = 3000,
    app = require('./app');

const server = app.listen(port, () => {
    //res.statusCode = 200;
    //res.setHeader('Content-Type', 'text/plain');
    //res.end("Request Received");
    console.log("Listening on port ", port);
});

//server.listen(port, hostname, () => {
//  console.log("Server is running on localhost");
//});


module.exports = server;
