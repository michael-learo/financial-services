const express = require('express');
      //path    = require('pate'),
      //compression = require('compression');

const app = express();

app.use((req, res) => {

	res.writeHead(404, {"Content-Type": "text/plain"});
	res.write("404 Not Found");
	res.end();
})

module.exports = app;
