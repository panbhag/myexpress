var myExpress = require('./myExpress.js');
var connect = require("connect");
var express = require("express");
var app = myExpress();



app.use(function(req,res,next)
{
    console.log("two");
    next();
});

app.use(function(req,res,next){
    console.log("one");
    //res.end("Rate limit exceeded");
    next();
})

// simple logger
app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

app.use(express.logger());
app.use(express.static('public'))

app.use(express.basicAuth(function(user, pass){
  return 'pankaj' == user & 'password' == pass;
}));

//app.use(connect.static(__dirname + '/public'));
//app.use(connect.directory('public'));

app.get("/",function(req,res)
{
      console.log("handler");
      res.writeHead(200);
      res.end('Good morning');

}
);

app.get("/morning",function(req,res)
{
      console.log("handler");
      res.writeHead(200);
      res.end('Good morning');

}
);



app.listen(3000);


