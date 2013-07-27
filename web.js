var express = require('express');
var app = express.createServer(express. logger())

var htmlfile = "index.html";

app.get('/', function(request, response) {
    var html = fs.readSync(htmlfile).toString()
    response.send(html)
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});