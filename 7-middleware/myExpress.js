var http = require('http');
var url = require("url");
var request = require('./request.js');
var response = require('./response');
var routes = require('./routes')
var middleware = require("./middleware");


function myExpress()
{


    var server = http.createServer(function(req, res) {

    request(req);
    response(res);

    var pathHandler = routes.match(req);


    if(!pathHandler){
      pathHandler= function(req,res){
          res.writeHead(200);
          res.end('Route not found');
      }
    }
    middleware.run(req,res,function(){
          pathHandler(req,res);
    })


    });

   self.listen = function(port){
   
      self.server.listen(port);
      console.log("listening on port : " , port);
   
   }


return {listen:listen, get:routes.get, use:middleware.use}

}


module.exports = myExpress;
