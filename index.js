var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let message = '';
    for (let index= 1; index < 10; index++)
    {
        message+= `${index}`;
    }
    res.end(message);
}).listen(8080);

