var router = require("./router.js");
// problem: need a simple way to look at a users badge count and javascript points from a web browser
// solution:  use node.js to perform the profile lookups and server out template via http

// create a web server
var http = require('http'); // copied this code from the sample webserver on nodejs.org
http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(8000); // changed port to one of the treehouse ports and removed local computer port
console.log('Server running at http://workspace-url/');
