var express = require('express');
var fs = require('fs');
var app = express.createServer(express. logger())

var htmlfile = "index.html";

app.get('/', function(request, response) {
    var html = fs.readFileSync(htmlfile).toString();
    //var buf = new Buffer(html)
    //var line = buf.write(buf)
    response.send(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});