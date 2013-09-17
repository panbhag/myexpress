var myExpress = require('./myExpress.js');


var app = myExpress();

app.get("/morning",function(req,res)
{
      var message = 'Good morning'
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', message.length);
      res.writeHead(200);
      res.end(message);
}
);

app.get("/night",function(req,res)
{
      var message = 'Good night'
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', message.length);
      res.writeHead(200);
      res.end(message);
}
);

app.listen(3000);


